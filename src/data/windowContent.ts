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
    date: 'SEP 2025 - OCT 2025',
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
    date: 'MARCH 2024 - PRESENT',
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
      "Mechanically is an AI-powered parts ordering app that turns a mechanic's voice and photo/video diagnosis of a damaged vehicle into a confirmed, orderable parts list. It also searches and compares prices across suppliers and generates invoices automatically.",
      'Built in 48 hours with a team of 4 at the Partly x WDCC x DEVS Hackathon, where it won Best Technical Implementation, judged the closest to production-deployable and the most complete end-to-end build.',
      'I designed the end-to-end UX and UI in Figma, including a review flow so mechanics verify every AI-suggested part before ordering. I then handed it off and built the front end in React Native (Expo, NativeWind), integrated with a Python/TypeScript backend.',
    ],
    slides: [
      '/mechanically/suppliers.png',
      '/mechanically/capture-and-review.png',
      '/mechanically/context.png',
    ].map((src, i) => img(src, `Mechanically ${i + 1}`)),
  },

guesswhich: {
    title: 'Guess Which: Research Methods Game',
    heading: 'Guess Which: Research Methods Game',
    date: 'JULY 2025 - NOV 2025',
    body: [
      'Guess Which is a real-time, two-player web game that teaches postgraduate research paradigms and methods. I built it for an academic client as my University of Auckland capstone, and it was nominated for an Excellence Award.',
      'As front-end lead and designer, I designed the cards, lobby, gameplay and results screens in Figma and presented prototypes to the client. I then built the UI in React, TypeScript and Tailwind, connected to a Node.js/Socket.IO backend for live lobbies, turn logic and synced game state, and deployed it on AWS Amplify.',
      'I ran user testing with external participants and used the findings to redesign the win/loss feedback and overlay interactions.',
    ],
    slides: [
      ['/guesswhich/hero.png', 'Guess Which game hero shot'],
      ['/guesswhich/cardlibrary.png', 'Guess Which card library'],
      ['/guesswhich/details.png', 'Guess Which details'],
    ].map(([src, alt]) => img(src, alt)),
  },

esports: {
    title: 'Esport Club: Graphic Designer',
    heading: 'Esport Club: Graphic Designer',
    date: 'MAR 2026 - NOV 2026',
    body: [
      'As a graphic designer for the Auckland University Esports Club (AUEC), I design social media graphics and promotional posts for club events and web pages.',
      'My idle-screen display graphics were adopted for use in the University Esports Lounge, selected on the strength of the design.',
    ],
    slides: [
      '/esports/esport2.png',
      '/esports/esport5.png',
      '/esports/esport4.png',
      '/esports/esport4.2.png',
      '/esports/esport3.png',
      '/esports/esport1.png',
      '/esports/interclub.png',
    ].map((src, i) => img(src, `Esports graphic ${i + 1}`)),
  },

  basketball: {
    title: 'Basketball Team: Photos and Instagram Graphics',
    heading: 'Basketball Team: Photos and Instagram Graphics',
    date: 'JUL 2025 - PRESENT',
    body: [
      "I'm the photographer and graphic designer for a social basketball team, producing the team's photos and social media graphics.",
      "The team's account is the most followed social basketball team account in the University of Auckland UNIM8s League.",
    ],
    links: [{ label: 'Team Instagram', href: 'https://www.instagram.com/assketballers/' }],
    slides: [
      '/basketball/seasons snapshots.png',
      '/basketball/champs.png',
      '/basketball/potg.png',
      '/basketball/thankyou.png',
      '/basketball/game1notice.png',
      '/basketball/s1notice.png',
      '/basketball/s1result.png',
      '/basketball/s1result2.png',
      '/basketball/s2gameday.png',
      '/basketball/s2result.png',
      '/basketball/s2result2.png',
      '/basketball/s2game2.png',
    ].map((src, i) => img(src, `Basketball team graphic ${i + 1}`))
  },

  mixedmedia: {
    title: 'Mixed Media Art: Poster Series',
    heading: 'Mixed Media Art: Poster Series',
    date: 'DEC 2024 - PRESENT',
    body: ['In my free time, I enjoy creating mixed media art pieces. This series of posters is a collection of my work, showcasing my creativity and artistic skills.'],
    links: [{ label: 'Mixed Media Art Instagram', href: 'https://www.instagram.com/designwithjayc/' }],
    slides: [
      '/mixedmedia/1.png',
      '/mixedmedia/2.png',
      '/mixedmedia/3.png',
      '/mixedmedia/4.png',
      '/mixedmedia/5.png',
      '/mixedmedia/6.png',
      '/mixedmedia/7.png',
      '/mixedmedia/8.png',
      '/mixedmedia/9.png',
      '/mixedmedia/10.png',
      '/mixedmedia/11.png',
      '/mixedmedia/12.png',
      '/mixedmedia/13.png',
    ].map((src, i) => img(src, `Mixed media art graphic ${i + 1}`)),
  },

  invitely: {
    title: 'Discord Bot: Invitely',
    heading: 'Discord Bot: Invitely',
    date: 'JUN 2024 - PRESENT',
    body: [
      'Invitely is a Discord bot built in Node.js that sends game invites as sealed, letter-style direct messages.',
      "Each invite comes with a live lobby that updates as friends confirm they're in.",
    ],
    slides: [],
  },

  soundscape: {
    title: 'Soundscape: Interactive Realtime Audio Visualiser',
    heading: 'Soundscape: Interactive Realtime Audio Visualiser',
    date: 'MAR 2026 - NOV 2026',
    body: [
        'Soundscape is an interactive audio visualiser that generates real-time visuals based on audio input. It was built as a speculative design project to explore the intersection of sound and visual art.',
    ],
    slides: [],
  },
}