'use client'

import { useEffect, useRef, useState } from 'react'
import GooeyNav from '@/components/GooeyNav/GooeyNav'
import { cn } from '@/lib/utils'

// One list drives both the nav buttons and the scroll tracking.
// Order = left-to-right in the nav AND top-to-bottom on the page.
// When the About section comes back, uncomment its line.
const NAV_ITEMS = [
  { label: 'HOME', id: 'home' },
  { label: 'WORK', id: 'work' },
  { label: 'ABOUT', id: 'about' },
  { label: 'CONTACT', id: 'contact' },
]

const SHOW_AT_TOP = true // keep the nav visible while you're at the very top of the page
const TOP_ZONE = 80 // px from the top that counts as "the top"
const MIN_SCROLL = 8 // ignore tiny scroll movements so the nav doesn't flicker
const LOCK_MS = 1200 // after clicking a nav item, ignore scrolling for this long

export function SiteNav() {
  const [active, setActive] = useState(0)
  const [visible, setVisible] = useState(SHOW_AT_TOP)
  const lockUntil = useRef(0)
  const lastY = useRef(0)

  useEffect(() => {
    lastY.current = window.scrollY
    let frame = 0

    const update = () => {
      frame = 0
      const maxY = document.documentElement.scrollHeight - window.innerHeight
      // Clamp, because iPhones rubber-band past the top and bottom of the page
      const y = Math.max(0, Math.min(window.scrollY, maxY))
      const locked = performance.now() < lockUntil.current

      // 1. Which section are we in? The last one whose top has passed 40% down the screen.
      if (!locked) {
        let index = 0
        NAV_ITEMS.forEach((item, i) => {
          const el = document.getElementById(item.id)
          if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.4) index = i
        })
        // The footer is shorter than the screen, so at the very bottom Contact wins
        setActive(y >= maxY - 4 ? NAV_ITEMS.length - 1 : index)
      }

      // 2. Show the nav when scrolling up, hide it when scrolling down
      const diff = y - lastY.current
      if (locked || (SHOW_AT_TOP && y < TOP_ZONE)) setVisible(true)
      else if (diff < -MIN_SCROLL) setVisible(true)
      else if (diff > MIN_SCROLL) setVisible(false)
      if (locked || Math.abs(diff) > MIN_SCROLL) lastY.current = y
    }

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    frame = requestAnimationFrame(update) // set the starting state (e.g. page loaded at /#work)
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [])

  const handleChange = (index: number) => {
    // Highlight the clicked item straight away and keep the nav on screen while the page
    // glides there, so the gooey animation isn't hidden and doesn't flash through
    // the sections in between.
    lockUntil.current = performance.now() + LOCK_MS
    setActive(index)
    setVisible(true)
    window.setTimeout(() => window.dispatchEvent(new Event('scroll')), LOCK_MS + 50)
  }

  return (
    <div
      className={cn(
        // z-0 on purpose: sits above the page sections but BELOW windows (their z-index starts at 1)
        'pointer-events-none fixed inset-x-0 z-0 flex justify-center px-3 font-display',
        // Phone: bottom of the screen (clear of the iPhone home bar). Desktop: top.
        'bottom-[max(1rem,env(safe-area-inset-bottom))] md:top-4 md:bottom-auto',
        'transition-transform duration-300 ease-out motion-reduce:transition-none',
        // Hidden = pushed off the screen edge it lives on
        visible ? 'translate-y-0' : 'translate-y-[250%] md:-translate-y-[250%]',
        // Keyboard users tabbing into a hidden nav bring it back
        'has-[:focus-visible]:translate-y-0',
      )}
    >
      <div className="pointer-events-auto">
        <GooeyNav
          className="site-nav"
          items={NAV_ITEMS.map(({ label, id }) => ({ label, href: `#${id}` }))}
          activeIndex={active}
          onChange={handleChange}
          style={{
            '--gn-frame': 'rgba(59, 47, 64, 0.92)',
            '--gn-frame-edge': 'rgba(255, 255, 255, 0.65)',
          }}
        />
      </div>
    </div>
  )
}