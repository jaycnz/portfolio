import type { CSSProperties, ComponentType, ReactNode } from 'react'

export interface GooeyNavItem {
  label?: string
  href?: string
  icon?: ReactNode
}

export interface GooeyNavProps {
  items?: GooeyNavItem[]
  initialActiveIndex?: number
  /** Pass this (with onChange) to control the active item */
  activeIndex?: number
  onChange?: (index: number, item: GooeyNavItem) => void
  theme?: 'dark' | 'light'
  color?: string
  activeTextColor?: string
  colors?: string[]
  size?: 'sm' | 'md' | 'lg'
  frame?: boolean
  animationTime?: number
  particleCount?: number
  timeVariance?: number
  spread?: number
  gooeyness?: number
  wobble?: number
  hoverEffect?: boolean
  className?: string
  style?: CSSProperties & { [cssVar: `--${string}`]: string }
}

declare const GooeyNav: ComponentType<GooeyNavProps>
export default GooeyNav