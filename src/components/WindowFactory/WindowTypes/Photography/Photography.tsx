import React from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

// src/components/WindowTypes/AboutMe.tsx
interface PhotographyProps {
  setInspectedImage: (image: string | null) => void;
}

export function Photography({ setInspectedImage }: PhotographyProps) {
  return (
    <div className="flex flex-col items-center p-4 space-y-4">
      {/* Text / "blog post" */}
      <div className="text-center space-y-2">
        <h2 className="text-xl font-bold">Photography</h2>
        <p className="text-sm text-left">
          I just got my first camera this year! Here are some of my favorite shots I've taken so far.
        </p>
        <ResponsiveMasonry columnsCountBreakPoints={{70: 1, 150: 2, 180: 3}}>
          <Masonry gutter="10px">

            <img src="/photography/Booklet1.png" className="rounded shadow-md" onClick={() => setInspectedImage('/photography/Booklet1.png')} />


          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  );
}
