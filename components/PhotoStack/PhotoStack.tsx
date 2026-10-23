'use client'

import Image from 'next/image'
import { useState } from 'react'
import { animate, motion, useMotionValue } from 'motion/react'

type Photo = { src: string; alt: string }
type Card = Photo & { id: number }

// Resting position of each card by depth (0 = front). Tweak these to taste.
const PILE = [
  { x: 0, y: 0, r: 0 },
  { x: 16, y: -8, r: 6 },
  { x: -14, y: 10, r: -5 },
  { x: 8, y: 14, r: 3 },
]

const SPREAD_ON_HOVER = 1.7 // how much further the cards behind fan out
const LIFT_ON_HOVER = 6 // px the top card rises on hover

const SPRING = { type: 'spring', stiffness: 260, damping: 22 } as const

function StackCard({
  photo,
  depth,
  total,
  hovered,
  onSendToBack,
}: {
  photo: Card
  depth: number
  total: number
  hovered: boolean
  onSendToBack: () => void
}) {
  const x = useMotionValue(0)
  const isTop = depth === 0
  const pile = PILE[Math.min(depth, PILE.length - 1)]
  const k = hovered ? SPREAD_ON_HOVER : 1

  // Click: nudge the card sideways, then tuck it under the pile
  const flick = async () => {
    await animate(x, 140, { duration: 0.15, ease: 'easeOut' })
    onSendToBack()
    animate(x, 0, SPRING)
  }

  return (
    // Outer layer: pile position + hover
    <motion.div
      className={`absolute inset-0 ${isTop ? '' : 'pointer-events-none'}`}
      style={{ zIndex: total - depth }}
      initial={false}
      animate={{
        x: pile.x * k,
        y: pile.y * k - (isTop && hovered ? LIFT_ON_HOVER : 0),
        rotate: pile.r * k,
        scale: isTop && hovered ? 1.03 : 1 - depth * 0.04,
        opacity: depth > PILE.length - 1 ? 0 : 1,
      }}
      transition={SPRING}
    >
      {/* Inner layer: drag + click */}
      <motion.div
        role={isTop ? 'button' : undefined}
        tabIndex={isTop ? 0 : -1}
        aria-label={isTop ? 'Show next photo' : undefined}
        onKeyDown={(e) => {
          if (isTop && (e.key === 'Enter' || e.key === ' ')) {
            e.preventDefault()
            flick()
          }
        }}
        className={`relative size-full overflow-hidden rounded-[28%] shadow-xl ${
          isTop ? 'cursor-grab touch-none active:cursor-grabbing' : ''
        }`}
        style={{ x }}
        drag={isTop}
        dragSnapToOrigin
        dragElastic={0.6}
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        whileDrag={{ scale: 1.04 }}
        onDragEnd={(_, info) => {
          const dist = Math.hypot(info.offset.x, info.offset.y)
          const speed = Math.hypot(info.velocity.x, info.velocity.y)
          if (dist > 70 || speed > 600) onSendToBack()
        }}
        onTap={isTop ? flick : undefined}
      >
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes="(min-width: 1024px) 256px, (min-width: 768px) 224px, 176px"
          priority={photo.id === 0}
          draggable={false}
          className="pointer-events-none select-none object-cover"
        />
        {/* Dim cards further back so the edges read as separate photos */}
        <motion.div
          className="pointer-events-none absolute inset-0 bg-black"
          initial={false}
          animate={{ opacity: Math.min(depth, 3) * 0.18 }}
          transition={SPRING}
        />
      </motion.div>
    </motion.div>
  )
}

export function PhotoStack({
  photos,
  className = '',
}: {
  photos: Photo[]
  className?: string
}) {
  const [cards, setCards] = useState<Card[]>(() =>
    photos.map((p, i) => ({ ...p, id: i })),
  )
  const [hovered, setHovered] = useState(false)

  // Move the top card to the back of the array
  const sendToBack = () => setCards((prev) => [...prev.slice(1), prev[0]])

  return (
    <div
      className={`relative shrink-0 ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {cards.map((card, depth) => (
        <StackCard
          key={card.id}
          photo={card}
          depth={depth}
          total={cards.length}
          hovered={hovered}
          onSendToBack={sendToBack}
        />
      ))}
    </div>
  )
}