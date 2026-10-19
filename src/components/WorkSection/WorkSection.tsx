'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Section } from '../Section'
import { GlassPanel } from '../GlassPanel'
import { FILTERS, projects, type Filter } from '@/src/data/projects'
import { useWindows } from '../WindowProvider'

export function WorkSection() {
  const [active, setActive] = useState<Filter>('All')
  const { openWindow } = useWindows()

  const visible = projects.filter(
    (p) => active === 'All' || p.categories.includes(active),
  )

  return (
    <Section id="work" className="justify-center">
        <h2 className="mb-6 text-center font-display text-3xl sm:text-4xl md:text-5xl">
          Work/Projects
        </h2>
      <GlassPanel className="mx-auto w-full max-w-6xl p-5 sm:p-8">
        {/* Filter pills */}
        <div role="group" aria-label="Filter projects" className="flex flex-wrap justify-center gap-2">
          {FILTERS.map((filter) => {
            const isActive = filter === active
            return (
              <button
                key={filter}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActive(filter)}
                className={
                  'rounded-full border px-5 py-1.5 font-display text-base transition md:px-8 md:py-2 md:text-xl ' +
                  (isActive
                    ? 'border-white bg-white text-black'
                    : 'border-white/50 bg-[#3b2f40] text-white hover:bg-[#4a3b50]')
                }
              >
                {filter}
              </button>
            )
          })}
        </div>

        {/* Folder grid */}
        {/* Fixed-height area: the panel never changes size, and extra folders scroll inside it */}
        <div className="mt-6 h-[min(28rem,60svh)] overflow-y-auto px-1 py-2 [scrollbar-width:thin] [scrollbar-color:rgba(255,255,255,0.4)_transparent]">
        <ul className="grid grid-cols-2 content-start gap-x-4 gap-y-8 md:grid-cols-4">          {visible.map((project) => (
            <li key={project.id}>
              <button
                type="button"
                onClick={() => openWindow(project.windowId)}
                className="group flex w-full flex-col items-center gap-2 text-center"
              >
                <span className="relative size-20 transition group-hover:-translate-y-1 sm:size-24">
                  <Image
                    src="/images/folder.png"
                    alt=""
                    width={96}
                    height={96}
                    className="absolute inset-0 size-full object-contain transition-opacity group-hover:opacity-0"
                  />
                  <Image
                    src="/images/folder_hover.png"
                    alt=""
                    width={96}
                    height={96}
                    className="absolute inset-0 size-full object-contain opacity-0 transition-opacity group-hover:opacity-100"
                  />
                </span>
                <span className="font-display text-lg leading-snug">{project.title}</span>
              </button>
            </li>
          ))}
        </ul>
        </div>
      </GlassPanel>
    </Section>
  )
}