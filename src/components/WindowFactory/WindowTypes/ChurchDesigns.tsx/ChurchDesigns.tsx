import React from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

// src/components/WindowTypes/AboutMe.tsx
interface ChurchDesignsProps {
  setInspectedImage: (image: string | null) => void;
}

const backdropImages = [
  '/church/Backdrop1.png',
  '/church/Backdrop2.png',
];

const masonryImages = [
  '/church/Booklet1.png',
  '/church/Booklet2.png',
  '/church/Booklet3.png',
  '/church/SermonCover1.png',
  '/church/SermonCover2.png',
  '/church/SermonCover3.png',
];

export function ChurchDesigns({ setInspectedImage }: ChurchDesignsProps) {
  return (
    <div className="flex flex-col items-center p-4 space-y-4">
      {/* Text / "blog post" */}
      <div className="text-center space-y-2">
        <h2 className="text-xl font-bold">Graphic Design for Church</h2>
        <p className="text-sm text-left">
          I've been designing for my church for about 3 years now! Here is some of the work I've produced for various events.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {backdropImages.map((src, idx) => (
            <img
              key={src}
              src={src}
              alt={`Church Backdrop ${idx + 1}`}
              className="rounded shadow-md cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => setInspectedImage(src)}
              loading="lazy"
            />
          ))}
        </div>
        <ResponsiveMasonry columnsCountBreakPoints={{70: 1, 150: 2, 180: 3}}>
          <Masonry gutter="10px">
            {masonryImages.map((src, idx) => (
              <img
                key={src}
                src={src}
                alt={`Church Design ${idx + 3}`}
                className="rounded shadow-md cursor-pointer hover:opacity-80 transition-opacity"
                onClick={() => setInspectedImage(src)}
                loading="lazy"
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  );
}
