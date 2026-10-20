'use client'

import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import type { Slide } from '@/src/data/windowContent'

// Above this many slides, show "3 / 33" instead of one dot per slide
const MAX_DOTS = 8

interface ProjectCarouselProps {
  slides: Slide[]
  onInspect: (src: string) => void
}

export function ProjectCarousel({ slides, onInspect }: ProjectCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: slides.length > 2,
    align: 'center',
  })
  const [selected, setSelected] = useState(0)

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap())
    onSelect()
    emblaApi.on('select', onSelect).on('reInit', onSelect)
    return () => {
      emblaApi.off('select', onSelect).off('reInit', onSelect)
    }
  }, [emblaApi])

  if (slides.length === 0) return null

  return (
    <div
      className="flex w-full flex-col items-center gap-4"
      role="region"
      aria-roledescription="carousel"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'ArrowLeft') scrollPrev()
        if (e.key === 'ArrowRight') scrollNext()
      }}
    >
      {/* Viewport: neighbouring slides peek out either side */}
      <div ref={emblaRef} className="w-full overflow-hidden">
        <div className="flex">
          {slides.map((slide, i) => {
            const isActive = i === selected
            return (
              <div key={i} className="min-w-0 flex-[0_0_72%] px-1.5">
                <div
                  className={
                    'aspect-[5/6] overflow-hidden rounded-2xl bg-[#3b2f40] shadow-md transition duration-300 ' +
                    (isActive ? 'scale-100' : 'scale-90 opacity-60')
                  }
                >
                  {slide.type === 'image' ? (
                    <button
                      type="button"
                      onClick={() => onInspect(slide.src)}
                      className="block size-full cursor-zoom-in"
                      aria-label="Enlarge image"
                    >
                      <img
                        src={slide.src}
                        alt={slide.alt ?? ''}
                        loading="lazy"
                        draggable={false}
                        className="size-full object-contain"
                      />
                    </button>
                  ) : (
                    <iframe
                      src={slide.src}
                      title={slide.title}
                      loading="lazy"
                      allowFullScreen
                      // only the centred slide is interactive, so swiping past the others still works
                      className={'size-full ' + (isActive ? '' : 'pointer-events-none')}
                    />
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {slides.length > 1 && (
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={scrollPrev}
            aria-label="Previous slide"
            className="shrink-0 transition hover:scale-110 active:scale-95"
          >
            <img src="/images/left_button.png" alt="" className="size-9" />
          </button>

          {slides.length <= MAX_DOTS ? (
            <div className="flex items-center gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to slide ${i + 1}`}
                  aria-current={i === selected}
                  onClick={() => emblaApi?.scrollTo(i)}
                  className={
                    'size-2.5 rounded-full bg-[#4a4448] transition ' +
                    (i === selected ? 'scale-125' : 'opacity-40 hover:opacity-70')
                  }
                />
              ))}
            </div>
          ) : (
            <span className="min-w-14 text-center font-display text-xl text-[#4a4448]">
              {selected + 1} / {slides.length}
            </span>
          )}

          <button
            type="button"
            onClick={scrollNext}
            aria-label="Next slide"
            className="shrink-0 transition hover:scale-110 active:scale-95"
          >
            <img src="/images/right_button.png" alt="" className="size-9" />
          </button>
        </div>
      )}
    </div>
  )
}