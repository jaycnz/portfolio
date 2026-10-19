'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Section } from '../Section'
import { GlassPanel } from '../GlassPanel'
import { FILTERS, projects, type Filter } from '@/src/data/projects'

export function WorkSection() {
  const [active, setActive] = useState<Filter>('All')

  const visible = projects.filter(
    (p) => active === 'All' || p.categories.includes(active),
  )

  return (
    <Section id="work" className="justify-center">
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
                  'rounded-full border px-4 py-1 font-display text-xs transition ' +
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
        <ul className="mt-8 grid min-h-[22rem] grid-cols-2 content-start gap-x-4 gap-y-8 md:grid-cols-4">
          {visible.map((project) => (
            <li key={project.id}>
              <button
                type="button"
                onClick={() => console.log('open window:', project.windowId)}
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
                <span className="font-display text-sm leading-snug">{project.title}</span>
              </button>
            </li>
          ))}
        </ul>
      </GlassPanel>
    </Section>
  )
}