export type Category = 'UX/UI' | 'CODE' | 'GRAPHIC' | 'PHOTO/VIDEO' | 'SPECULATIVE DESIGN'

export const FILTERS = ['All', 'UX/UI', 'CODE', 'GRAPHIC', 'PHOTO/VIDEO', 'SPECULATIVE DESIGN'] as const
export type Filter = (typeof FILTERS)[number]

export interface Project {
  id: string
  title: string
  categories: Category[]
  /** The id passed to openWindow() in the next step */
  windowId: string
}

export const projects: Project[] = [
  { id: 'mechanically', title: 'Mechanically: Parts Ordering App', categories: ['UX/UI', 'CODE'], windowId: 'mechanically' },
  { id: 'guess-which', title: 'Guess Which: Research Methods Game', categories: ['UX/UI', 'CODE'], windowId: 'guesswhich' },
  { id: 'esports', title: 'Esports Club: Banners and Lounge Screens', categories: ['GRAPHIC'], windowId: 'esports' },
  { id: 'basketball', title: 'Basketball Team: Photos and Instagram Graphics', categories: ['GRAPHIC', 'PHOTO/VIDEO'], windowId: 'basketball' },
  { id: 'mixed-media', title: 'Mixed Media Art: Poster Series', categories: ['GRAPHIC'], windowId: 'mixedmedia' },
  { id: 'camp', title: 'Camp Graphics (Backdrops, Booklets)', categories: ['GRAPHIC'], windowId: 'churchdesigns' },
  { id: 'invitely', title: 'Discord Bot: Invitely', categories: ['CODE'], windowId: 'invitely' },
  { id: 'genai', title: '14 Day Visual Prompting Challenge', categories: ['GRAPHIC'], windowId: 'GenAIPrompting' },
  { id: 'soundscape', title: 'Soundscape: Interactive Realtime Audio Visualiser', categories: ['CODE', 'SPECULATIVE DESIGN'], windowId: 'soundscape' },

]