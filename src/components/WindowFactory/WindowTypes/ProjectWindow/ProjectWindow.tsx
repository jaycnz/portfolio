import { ProjectCarousel } from '@/src/components/ProjectCarousel'
import type { WindowContent } from '@/src/data/windowContent'

interface ProjectWindowProps {
  content: WindowContent
  setInspectedImage: (image: string | null) => void
}

export function ProjectWindow({ content, setInspectedImage }: ProjectWindowProps) {
  return (
    <div className="flex h-full flex-col gap-6 overflow-y-auto p-5 md:flex-row md:gap-8 md:p-7">
      {/* Left: text */}
      <div className="min-w-0 md:w-1/2">
        <h1 className="font-display text-3xl uppercase leading-none md:text-4xl">
          {content.heading}
        </h1>
        <p className="mt-2 text-[11px] font-bold tracking-[0.2em] text-[#6b6468]">
          {content.date}
        </p>

        <div className="mt-5 space-y-3 text-xs font-semibold leading-snug text-[#5a5458]">
          {content.body.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        {content.links && (
          <ul className="mt-4 space-y-1 text-xs font-semibold">
            {content.links.map((link) => (
              <li key={link.href}>
                <a href={link.href} target="_blank" rel="noopener noreferrer" className="Link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Right: carousel (first on mobile) */}
      <div className="order-first flex items-center justify-center md:order-none md:w-1/2">
        <ProjectCarousel slides={content.slides} onInspect={setInspectedImage} />
      </div>
    </div>
  )
}