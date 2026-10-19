import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionProps {
  /** The anchor id, e.g. "home", "work", "about", "contact" */
  id: string
  children: ReactNode
  className?: string
}

export function Section({ id, children, className }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'relative flex min-h-svh w-full flex-col px-4 pt-24 pb-28 sm:px-8 md:pt-28 md:pb-16',
        className,
      )}
    >
      {children}
    </section>
  )
}