import { Carousel } from "@/src/components/Carousel";
// src/components/WindowTypes/AboutMe.tsx
export function PersonalPosters() {
  return (
    <div className="TEST flex flex-col p-4 space-y-4 overflow-scroll h-176">
        <h1 className="flex font-bold text-xl">Personal Posters</h1>
        <p>Below is a collection of my personal posters that I have created over the years, inspired by my interest in music, philosophy, and pop culture. These posters showcase my skills in graphic design, typography, and how emotions can be conveyed through visual elements.</p>
        <div className="w-full flex justify-center">
        <Carousel images={[
          '/PersonalPosters/1_oliveira.png',
          '/PersonalPosters/2_jinx2.png',
          '/PersonalPosters/2_jinx3.png',
          '/PersonalPosters/3_dragunov.png',
          '/PersonalPosters/4_SFViego2.png',
          '/PersonalPosters/5_city1.png',
          '/PersonalPosters/5_city6.png',
          '/PersonalPosters/6_sailorfull.png',
          '/PersonalPosters/7_itzy.png',
          '/PersonalPosters/8_wonderboy.png',
          '/PersonalPosters/9_caesar.png',
          '/PersonalPosters/10_fireman-green.png',
          '/PersonalPosters/10_fireman-blue.png',
          '/PersonalPosters/10_fireman-red.png',
          '/PersonalPosters/11_PEACEMAKER.png',
          '/PersonalPosters/12_KKF.png',
          '/PersonalPosters/13_PARADES.png',
        ]}></Carousel>
        </div>

    </div>

  );
}
