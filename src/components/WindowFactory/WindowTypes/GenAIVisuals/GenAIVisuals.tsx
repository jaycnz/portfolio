import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

// src/components/WindowTypes/AboutMe.tsx
export function GenAIVisuals() {
  return (
    <div className="TEST flex flex-col items-center p-4 space-y-4 overflow-scroll h-126">
        <h1>14 Day Generative AI Visual Prompting Challenge</h1>
        <p>blah blah blah description blah blah</p>
        <p>blah blah blah description blah blah</p>
        <img src={'https://picsum.photos/200'}></img>
        <p>blah blah blah description blah blah</p>
        <img src={'https://picsum.photos/200'}></img>
        <img src={'https://picsum.photos/200'}></img>
    </div>

  );
}
