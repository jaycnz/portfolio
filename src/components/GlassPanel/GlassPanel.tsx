import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/lib/utils'

export function GlassPanel({ className, ...props }: ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      className={cn(
        'rounded-[2rem] border border-white/70 bg-white/[0.04] backdrop-blur-md',
        className,
      )}
      {...props}
    />
  )
}