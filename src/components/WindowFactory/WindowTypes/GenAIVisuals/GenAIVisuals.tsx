import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

interface GenAIVisualsProps {
  setInspectedImage: (image: string | null) => void;
}
// src/components/WindowTypes/AboutMe.tsx
export function GenAIVisuals({ setInspectedImage }: GenAIVisualsProps) {

  const images = [
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
  ];

  return (
    <div className="flex flex-col p-4 space-y-4 overflow-y-auto h-full">
        <h1 className="flex font-bold text-xl">14 Day Generative AI Visual Prompting Challenge</h1>
        <p>I spent 14 days writing and developing prompt frameworks to effectively generate visual outputs in a product photoshoot/marketing context. Each day, I created a new visual concept based of my choice, using generative AI tools such as Gemini 2.5 Nano Banana and Flux Kontext to bring my ideas to life. The challenge helped me understand the capabilities and limitations of AI in visual design, as well as improve my prompt engineering skills.
          <br/>            
          <br/>
            My journal process and prompt breakdown for this project can be found on my <a href="https://www.instagram.com/jayc.blend/" className="Link" target="_blank">Instagram</a>.
        </p>

        <ResponsiveMasonry columnsCountBreakPoints={{70: 1, 150: 2, 180: 3}}>
          <Masonry gutter="10px">
            {images.map((src, idx) => (
              <img
                key={src}
                src={src}
                alt={`Photography ${idx + 1}`}
                className="rounded shadow-md cursor-pointer hover:opacity-80 transition-opacity"
                onClick={() => setInspectedImage(src)}
                loading="lazy"
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
        

    </div>

  );
}
