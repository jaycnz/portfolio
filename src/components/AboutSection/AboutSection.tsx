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

type Lane = 'code' | 'design' | 'work'

// Left-to-right order of the lanes. Swap the colours for your two accents + a neutral.
const LANES: { id: Lane; label: string; color: string }[] = [
  { id: 'code', label: 'Code', color: '#5ea0ff' },
  { id: 'design', label: 'Design', color: '#ff7bd5' },
  { id: 'work', label: 'Work', color: '#cfd6d8' },
]

interface Job {
  title: string
  place: string
  when: string
  /** Sort key, YYYY-MM. The list sorts itself newest first, so order here doesn't matter */
  start: string
  ongoing?: boolean
  /** Which lane(s) the dot appears in. Two lanes = a merge */
  lanes: Lane[]
  note: string
}

const EXPERIENCE: Job[] = [
  {
    title: 'Web Developer Intern',
    place: 'Jesus Film Project',
    when: 'Nov 2025 – Feb 2026',
    start: '2026-06',
    lanes: ['code'],
    note: 'Front-end development for a global media platform, building responsive UI components and troubleshoot technical issues.',
  },
  {
    title: 'Graphic designer',
    place: 'UoA Esports Club',
    when: 'Mar 2026 – now',
    start: '2026-03',
    ongoing: true,
    lanes: ['design'],
    note: 'Social graphics and banners. Idle-screen displays adopted for the UoA Esports Lounge.',
  },
  {
    title: 'Design lead and front-end developer',
    place: 'Partly x WDCC x DEVS Hackathon',
    when: 'Jun 2026',
    start: '2026-06',
    lanes: ['code', 'design'],
    note: 'Won Best Technical Implementation. One of 10 teams, 48-hour build.',
  },
  {
    title: 'UX/UI Designer and Front-end lead',
    place: 'Guess Which, UoA capstone (CS399)',
    when: 'Jul – Nov 2025',
    start: '2025-07',
    lanes: ['code', 'design'],
    note: 'Team of 6. Nominated for the Excellence Award.',
  },
  {
    title: 'Brand Ambassador',
    place: 'Raydar',
    when: 'Jan 2025 – now',
    start: '2025-01',
    ongoing: true,
    lanes: ['work'],
    note: 'Represent brand values through outdoor activations and direct public engagement.',
  },
  {
    title: 'Sales Consultant',
    place: 'Country Road',
    when: 'Apr 2022 – Nov 2023',
    start: '2022-04',
    lanes: ['work'],
    note: 'Assisting customers and understand current products/fashion trends for tailored recommendations.',
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
  const jobs = [...EXPERIENCE].sort((a, b) => b.start.localeCompare(a.start))

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

        {/* Legend: plain labels for the lanes */}
        <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm text-white/80">
          {LANES.map((lane) => (
            <li key={lane.id} className="flex items-center gap-2">
              <span className="size-2.5 rounded-full" style={{ backgroundColor: lane.color }} />
              {lane.label}
            </li>
          ))}
        </ul>

        {/* Newest at the top, oldest at the bottom */}
        <ol className="mt-5">
          {jobs.map((job, i) => {
            const laneIdx = job.lanes
              .map((id) => LANES.findIndex((l) => l.id === id))
              .sort((a, b) => a - b)
            const first = laneIdx[0]
            const last = laneIdx[laneIdx.length - 1]

            return (
              <li key={job.title + job.place} className="grid grid-cols-[3.75rem_1fr] gap-4">
                {/* The graph: one column per lane, each 1.25rem wide */}
                <div aria-hidden className="relative flex">
                  {LANES.map((lane) => (
                    <div key={lane.id} className="relative w-5">
                      <span
                        className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 opacity-25"
                        style={{ backgroundColor: lane.color }}
                      />
                      {job.lanes.includes(lane.id) && (
                        <span
                          className={cn(
                            'absolute left-1/2 top-[0.4rem] size-3 -translate-x-1/2 rounded-full',
                            job.ongoing && 'motion-safe:animate-pulse',
                          )}
                          style={{ backgroundColor: lane.color }}
                        />
                      )}
                    </div>
                  ))}
                  {/* The merge line joining two lanes */}
                  {last > first && (
                    <span
                      className="absolute h-0.5"
                      style={{
                        top: 'calc(0.775rem - 1px)',
                        left: `${first * 1.25 + 0.625}rem`,
                        width: `${(last - first) * 1.25}rem`,
                        background: `linear-gradient(to right, ${LANES[first].color}, ${LANES[last].color})`,
                      }}
                    />
                  )}
                </div>

                <div className={i === jobs.length - 1 ? 'pb-0' : 'pb-8'}>
                  <p className="font-semibold">{job.title}</p>
                  <p className="text-white/80">{job.place} · {job.when}</p>
                  <p className="mt-1 text-sm text-white/70">{job.note}</p>
                  <p className="sr-only">Area: {job.lanes.map((id) => LANES.find((l) => l.id === id)?.label).join(', ')}</p>
                </div>
              </li>
            )
          })}
        </ol>
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