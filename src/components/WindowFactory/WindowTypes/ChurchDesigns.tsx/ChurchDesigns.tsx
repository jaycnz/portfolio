import React from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

// src/components/WindowTypes/AboutMe.tsx
interface ChurchDesignsProps {
  setInspectedImage: (image: string | null) => void;
}

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
          <img src="/church/Backdrop1.png" className="rounded shadow-md" onClick={() => setInspectedImage('/church/Backdrop1.png')} />
          <img src="/church/Backdrop2.png" className="rounded shadow-md" onClick={() => setInspectedImage('/church/Backdrop2.png')} />
        </div>
        <ResponsiveMasonry columnsCountBreakPoints={{70: 1, 150: 2, 180: 3}}>
          <Masonry gutter="10px">

            <img src="/church/Booklet1.png" alt="Church Design 3" className="rounded shadow-md" onClick={() => setInspectedImage('/church/Booklet1.png')} />
            <img src="/church/Booklet2.png" alt="Church Design 4" className="rounded shadow-md" onClick={() => setInspectedImage('/church/Booklet2.png')} />
            <img src="/church/Booklet3.png" alt="Church Design 5" className="rounded shadow-md" onClick={() => setInspectedImage('/church/Booklet3.png')} />
            <img src="/church/SermonCover1.png" alt="Church Design 6" className="rounded shadow-md" onClick={() => setInspectedImage('/church/SermonCover1.png')} />
            <img src="/church/SermonCover2.png" alt="Church Design 7" className="rounded shadow-md" onClick={() => setInspectedImage('/church/SermonCover2.png')} />
            <img src="/church/SermonCover3.png" alt="Church Design 8" className="rounded shadow-md" onClick={() => setInspectedImage('/church/SermonCover3.png')} />

          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  );
}
