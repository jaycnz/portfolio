'use client'

import { useState } from 'react'
import { Section } from '../Section'
import { GlassPanel } from '../GlassPanel'
import { useWindows } from '../WindowProvider'
import { cn } from '@/lib/utils'

type TabId = 'story' | 'experience' | 'tools'

const TABS: { id: TabId; label: string }[] = [
  { id: 'story', label: 'My Story' },
  { id: 'experience', label: 'Experience & Education' },
  { id: 'tools', label: 'Tools' },
]

// Edit these lists freely. Only facts from your project notes are filled in.
const EDUCATION = [
  {
    title: 'BDes/BSc, Computer Science and Design',
    place: 'University of Auckland',
    when: 'Graduating Nov 2026',
  },
]

const EXPERIENCE = [
  {
    title: 'Graphic design',
    place: 'UoA Esports Club',
    when: 'Mar 2026 – now',
    note: 'Social graphics and banners. Idle-screen displays adopted for the UoA Esports Lounge.',
  },
  {
    title: 'Design lead and front-end developer',
    place: 'Partly x WDCC x DEVS Hackathon',
    when: 'Jun 2026',
    note: 'Won Best Technical Implementation. One of 10 teams, 48-hour build.',
  },
  {
    title: 'Front-end lead',
    place: 'Guess Which, UoA capstone',
    when: 'Jul – Nov 2025',
    note: 'Team of 6. Nominated for the Excellence Award.',
  },
]

const TOOLS = [
  {
    group: 'Design',
    items: ['Figma', 'Photoshop', 'Lightroom', 'Premiere Pro', 'DaVinci Resolve', 'Google AI Studio'],
  },
  {
    group: 'Code',
    items: ['React', 'React Native', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Node.js', 'Git & GitHub'],
  },
]

function Story() {
  // Placeholder: copied from your old About window. Rewrite when you're ready.
  return (
    <div className="max-w-prose space-y-4 text-base leading-relaxed">
      <p>
        I’m a design and computer science student, interested in sports design, game design, and
        game development with a focus on storytelling and visual experiences. I love creating
        visuals and experiences that connect people and foster a sense of belonging.
      </p>
      <p>
        In my free time, I enjoy playing basketball, music, video games, and creating
        posters/digital art.
      </p>
    </div>
  )
}

function Experience() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="font-display text-xl">Education</h3>
        <ul className="mt-3 space-y-4">
          {EDUCATION.map((e) => (
            <li key={e.title}>
              <p className="font-semibold">{e.title}</p>
              <p className="text-white/80">{e.place} · {e.when}</p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="font-display text-xl">Experience</h3>
        <ul className="mt-3 space-y-4">
          {EXPERIENCE.map((e) => (
            <li key={e.title + e.place}>
              <p className="font-semibold">{e.title}</p>
              <p className="text-white/80">{e.place} · {e.when}</p>
              <p className="mt-1 text-sm text-white/70">{e.note}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function Tools() {
  return (
    <div className="space-y-6">
      {TOOLS.map((t) => (
        <div key={t.group}>
          <h3 className="font-display text-xl">{t.group}</h3>
          <p className="mt-2 text-white/80">{t.items.join(', ')}</p>
        </div>
      ))}

      {/* Tool icons go here later */}
    </div>
  )
}

export function AboutSection() {
  const [active, setActive] = useState<TabId>('story')
  const { openWindow } = useWindows()

  const tabClass =
    'flex whitespace-nowrap border-white/70 px-5 py-4 font-display text-base transition hover:bg-white/15 ' +
    'border-r last:border-r-0 md:flex-1 md:items-end md:justify-end md:border-r-0 md:border-b md:text-right md:last:border-b-0'

  return (
    <Section id="about" className="justify-center">
      <GlassPanel className="mx-auto flex w-full max-w-6xl flex-col overflow-hidden md:h-[min(32rem,70svh)] md:flex-row">
        {/* Tab list: a column on desktop, a scrolling row on phones */}
        <nav
          aria-label="About sections"
          className="flex shrink-0 overflow-x-auto border-b border-white/70 md:w-64 md:flex-col md:overflow-visible md:border-r md:border-b-0"
        >
          {TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              aria-current={active === tab.id ? 'true' : undefined}
              onClick={() => setActive(tab.id)}
              className={cn(tabClass, active === tab.id && 'bg-white/40')}
            >
              {tab.label}
            </button>
          ))}
          {/* Resume isn't a page: it opens the Resume window */}
          <button type="button" onClick={() => openWindow('resume')} className={tabClass}>
            Resume
          </button>
        </nav>

        {/* Content */}
        <div className="min-h-[18rem] flex-1 overflow-y-auto p-6 md:p-10">
          {active === 'story' && <Story />}
          {active === 'experience' && <Experience />}
          {active === 'tools' && <Tools />}
        </div>
      </GlassPanel>
    </Section>
  )
}