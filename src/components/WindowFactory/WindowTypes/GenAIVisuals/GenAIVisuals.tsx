import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

// src/components/WindowTypes/AboutMe.tsx
export function GenAIVisuals() {
  return (
    <div className="TEST flex flex-col p-4 space-y-4 overflow-scroll h-126">
        <h1 className="flex font-bold text-xl">14 Day Generative AI Visual Prompting Challenge</h1>
        <p>I spent 14 days writing and developing prompt frameworks to effectively generate visual outputs in a product photoshoot/marketing context.</p>
        <p>blah blah blah description blah blah</p>
        <img src={'https://picsum.photos/200'}></img>
        <p>blah blah blah description blah blah</p>
        <img src={'https://picsum.photos/200'}></img>
        <img src={'https://picsum.photos/200'}></img>
    </div>

  );
}
