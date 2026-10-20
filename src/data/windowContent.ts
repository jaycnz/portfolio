export type Slide =
  | { type: 'image'; src: string; alt?: string }
  | { type: 'embed'; src: string; title: string }

export interface WindowContent {
  /** Short title shown in the window's title bar */
  title: string
  /** Big heading inside the window */
  heading: string
  /** e.g. "Aug 2025 - Sep 2025" */
  date: string
  /** One string per paragraph */
  body: string[]
  links?: { label: string; href: string }[]
  /** Heroshots / mockups shown in the carousel */
  slides: Slide[]
}

const img = (src: string, alt = ''): Slide => ({ type: 'image', src, alt })

// The key of each entry MUST match the `windowId` in src/data/projects.ts
export const windowContent: Record<string, WindowContent> = {
  GenAIPrompting: {
    title: 'Generative AI Prompting',
    heading: '14 Day Generative AI Visual Prompting Challenge',
    date: 'MONTH 2025 - MONTH 2025',
    body: [
      'I spent 14 days writing and developing prompt frameworks to effectively generate visual outputs in a product photoshoot/marketing context. Each day, I created a new visual concept based off my choice, using generative AI tools such as Gemini 2.5 Nano Banana and Flux Kontext to bring my ideas to life.',
      'The challenge helped me understand the capabilities and limitations of AI in visual design, as well as improve my prompt engineering skills.',
    ],
    links: [{ label: 'Journal + prompt breakdown on Instagram', href: 'https://www.instagram.com/jayc.blend/' }],
    slides: [
      '/GenAI/day1.png',
      '/GenAI/day2.png',
      '/GenAI/day3.png',
      '/GenAI/day5.png',
      '/GenAI/day5mock1.jpeg',
      '/GenAI/day5mock2.jpeg',
      '/GenAI/day5mock3.jpeg',
      '/GenAI/day6.png',
      '/GenAI/day7.png',
      '/GenAI/day7mock1.jpeg',
      '/GenAI/day7mock2.jpeg',
      '/GenAI/day7mock3.jpeg',
      '/GenAI/day8.1.png',
      '/GenAI/day8.2.png',
      '/GenAI/day8.3.png',
      '/GenAI/day9.png',
      '/GenAI/day9mock1.jpeg',
      '/GenAI/day9mock2.jpeg',
      '/GenAI/day10.png',
      '/GenAI/day10mock1.png',
      '/GenAI/day10mock2.png',
      '/GenAI/day11.1.png',
      '/GenAI/day11.2.png',
      '/GenAI/day11.3.png',
      '/GenAI/day12.1.png',
      '/GenAI/day12.2.png',
      '/GenAI/day12.3.png',
      '/GenAI/day13.1.png',
      '/GenAI/day13.2.png',
      '/GenAI/day13.3.png',
      '/GenAI/day14.png',
      '/GenAI/day14mock1.png',
      '/GenAI/day14mock2.png',
    ].map((src, i) => img(src, `GenAI visual ${i + 1}`)),
  },

  churchdesigns: {
    title: 'Church Camp Designs',
    heading: 'Graphic Design for Church',
    date: 'MONTH 20XX - PRESENT',
    body: [
      "I've been designing for my church for about 3 years now! Here is some of the work I've produced for various events.",
    ],
    slides: [
      '/church/Backdrop1.png',
      '/church/Backdrop2.png',
      '/church/Booklet1.png',
      '/church/Booklet2.png',
      '/church/Booklet3.png',
      '/church/SermonCover1.png',
      '/church/SermonCover2.png',
      '/church/SermonCover3.png',
    ].map((src, i) => img(src, `Church design ${i + 1}`)),
  },

  videoediting: {
    title: 'Video Editing (WIP)',
    heading: 'Video Editing (WIP)',
    date: 'MARCH 2015 - PRESENT',
    body: [
      'Video editing is perhaps the longest creative practice I have spent time on, starting very early on with Windows Movie Maker, progressing to tools like Sony Vegas Pro 16, then eventually Adobe Premiere Pro and DaVinci Resolve.',
      'While much of my early work is archived, the pieces here represent the projects I still feel best showcase my editing style and technical growth.',
    ],
    // links: [{ label: 'My TikTok', href: 'https://www.tiktok.com/@jay.chn' }],
    slides: [
    //   { type: 'embed', src: 'https://www.youtube.com/embed/JP2PTDJBiSw', title: 'YouTube video 1' },
    //   { type: 'embed', src: 'https://www.tiktok.com/embed/v2/7561240156532018450', title: 'TikTok video 1' },
    //   { type: 'embed', src: 'https://www.tiktok.com/embed/v2/7578053869645647124', title: 'TikTok video 2' },
    //   { type: 'embed', src: 'https://www.youtube.com/embed/MhNvv3z2KkM', title: 'YouTube video 2' },
    ],
},

mechanically: {
    title: 'Mechanically: Parts Ordering App',
    heading: 'Mechanically: Parts Ordering App',
    date: 'JULY 2026',
    body: [
      'Mechanically is a parts ordering app designed to streamline the process of ordering mechanical components for manufacturing. The app allows users to browse a catalog of parts, place orders, and track their shipments in real-time.',
      'The project involved extensive user research, wireframing, and prototyping to ensure a seamless user experience.',
    ],
    slides: [
    //   '/mechanically/1.png', 'Mechanically app interface',
    //   '/mechanically/2.png', 'Mechanically parts catalog',
    //   '/mechanically/3.png', 'Mechanically order tracking',
    ],
  },

guesswhich: {
    title: 'Guess Which: Research Methods Game',
    heading: 'Guess Which: Research Methods Game',
    date: 'JULY 2026',
    body: [
      'Guess Which is an interactive game designed to teach research methods in a fun and engaging way. Players are presented with various scenarios and must use critical thinking skills to identify the correct research approach.',
      'The project involved extensive user testing and iteration to ensure the game was both educational and entertaining.',
    ],
    slides: [
    //   '/guesswhich/1.png', 'Guess Which game interface',
    //   '/guesswhich/2.png', 'Guess Which scenario selection',
    //   '/guesswhich/3.png', 'Guess Which result display',
    ],
  },

esports: {
    title: 'Esport Club: Graphic Designer',
    heading: 'Esport Club: Graphic Designer',
    date: 'MARCH 2026 - NOV 2026',
    body: [
      'As a graphic designer for the Esport Club, I was responsible for creating visual assets for various marketing materials, including social media posts, event flyers, and promotional banners.',
      "The project involved close collaboration with the socials team and executives to ensure brand consistency and effective communication of the club's message."
    ],
    slides: [
    //   '/mechanically/1.png', 'Mechanically app interface',
    //   '/mechanically/2.png', 'Mechanically parts catalog',
    //   '/mechanically/3.png', 'Mechanically order tracking',
    ],
  },

  basketball: {
    title: 'Basketball Team: Photos and Instagram Graphics',
    heading: 'Basketball Team: Photos and Instagram Graphics',
    date: '',
    body: [],
    slides: [],
  },

  mixedmedia: {
    title: 'Mixed Media Art: Poster Series',
    heading: 'Mixed Media Art: Poster Series',
    date: '',
    body: [],
    slides: [],
  },

  invitely: {
    title: 'Discord Bot: Invitely',
    heading: 'Discord Bot: Invitely',
    date: '',
    body: [],
    slides: [],
  },

  soundscape: {
    title: 'Soundscape: Interactive Realtime Audio Visualiser',
    heading: 'Soundscape: Interactive Realtime Audio Visualiser',
    date: '',
    body: [],
    slides: [],
  },
}