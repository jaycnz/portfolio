import { Carousel } from "@/src/components/Carousel";
// src/components/WindowTypes/AboutMe.tsx
export function GenAIVisuals() {
  return (
    <div className="TEST flex flex-col p-4 space-y-4 overflow-scroll h-126">
        <h1 className="flex font-bold text-xl">14 Day Generative AI Visual Prompting Challenge</h1>
        <p>I spent 14 days writing and developing prompt frameworks to effectively generate visual outputs in a product photoshoot/marketing context. Each day, I created a new visual concept based of my choice, using generative AI tools such as Gemini 2.5 Nano Banana and Flux Kontext to bring my ideas to life. The challenge helped me understand the capabilities and limitations of AI in visual design, as well as improve my prompt engineering skills.
          <br/>            
          <br/>
            My journal process and prompt breakdown for this project can be found on my <a href="https://www.instagram.com/jayc.blend/" className="Link" target="_blank">Instagram</a>.
        </p>

        <p className="flex font-bold">Days 1-3: Adidas Track Jacket Visual Campaign</p>
        <div className="w-full flex justify-center">
        <Carousel images={[
          '/GenAI/day1.png',
          '/GenAI/day2.png',
          '/GenAI/day3.png',
        ]}></Carousel>
        </div>

        <p className="flex font-bold">Days 4-5: Anessa Sunscreen Informercial Posters</p>
        <div className="w-full flex justify-center">
        <Carousel images={[
          '/GenAI/day5.png',
          '/GenAI/day5mock1.jpeg',
          '/GenAI/day5mock2.jpeg',
          '/GenAI/day5mock3.jpeg',
        ]}></Carousel>
        </div>

        <p className="flex font-bold">Day 6: JESUS SAVES HOODIE V2</p>
        <div className="w-full flex justify-center">
        <Carousel images={[
          '/GenAI/day6.png',
        ]}></Carousel>
        </div>

        <p className="flex font-bold">Day 7: Anta Kai 1 China Exclusive Jelly Colourway</p>
        <div className="w-full flex justify-center">
        <Carousel images={[
          '/GenAI/day7.png',
          '/GenAI/day7mock1.jpeg',
          '/GenAI/day7mock2.jpeg',
          '/GenAI/day7mock3.jpeg',
        ]}></Carousel>
        </div>

        <p className="flex font-bold">Day 8: Anta Kai 1 ARTIST ON THE COURT</p>
        <div className="w-full flex justify-center">
        <Carousel images={[
          '/GenAI/day8.1.png',
          '/GenAI/day8.2.png',
          '/GenAI/day8.3.png',
        ]}></Carousel>
        </div>

        <p className="flex font-bold">Day 9: Pocari Sweat Summer Promotion</p>
        <div className="w-full flex justify-center">
        <Carousel images={[
          '/GenAI/day9.png',
          '/GenAI/day9mock1.jpeg',
          '/GenAI/day9mock2.jpeg',
        ]}></Carousel>
        </div>

        <p className="flex font-bold">Day 10: ELEMENT Regal Rasta Infomercial Poster</p>
        <div className="w-full flex justify-center">
        <Carousel images={[
          '/GenAI/day10.png',
          '/GenAI/day10mock1.png',
          '/GenAI/day10mock2.png',
        ]}></Carousel>
        </div>

        <p className="flex font-bold">Day 11: ELEMENT Indoor Photoshoot/Infomercial Posters</p>
        <div className="w-full flex justify-center">
        <Carousel images={[
          '/GenAI/day11.1.png',
          '/GenAI/day11.2.png',
          '/GenAI/day11.3.png',
        ]}></Carousel>
        </div>

        <p className="flex font-bold">Day 12: HERMÈS TERRE D'HERMÈS EDT</p>
        <div className="w-full flex justify-center">
        <Carousel images={[
          '/GenAI/day12.1.png',
          '/GenAI/day12.2.png',
          '/GenAI/day12.3.png',
        ]}></Carousel>
        </div>

        <p className="flex font-bold">Day 13: TEKKEN 8 x GENTLE MONSTER</p>
        <div className="w-full flex justify-center">
        <Carousel images={[
          '/GenAI/day13.1.png',
          '/GenAI/day13.2.png',
          '/GenAI/day13.3.png',
        ]}></Carousel>
        </div>

        <p className="flex font-bold">Day 14: ZUTOMAYO x YAMAHA HPH-MT8Z HEADPHONES</p>
        <div className="w-full flex justify-center">
        <Carousel images={[
          '/GenAI/day14.png',
          '/GenAI/day14mock1.png',
          '/GenAI/day14mock2.png',
        ]}></Carousel>
        </div>

    </div>

  );
}
