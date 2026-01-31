import React from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

// src/components/WindowTypes/AboutMe.tsx
interface PhotographyProps {
  setInspectedImage: (image: string | null) => void;
}

export function Photography({ setInspectedImage }: PhotographyProps) {
  return (
    <div className="flex flex-col items-center p-4 space-y-4 overflow-y-auto h-full">
      {/* Text / "blog post" */}
      <div className="text-center space-y-2">
        <h2 className="text-xl font-bold">Photography</h2>
        <p className="text-sm text-left">
          I just got my first camera this year! Here are some of my favorite shots I've taken so far.
        </p>
        <ResponsiveMasonry columnsCountBreakPoints={{70: 1, 150: 2, 180: 3}}>
          <Masonry gutter="10px">

            <img src="/photography/DSC03713.jpg" className="rounded shadow-md" onClick={() => setInspectedImage('/photography/DSC03713.jpg')} />
            <img src="/photography/DSC03731.jpg" className="rounded shadow-md" onClick={() => setInspectedImage('/photography/DSC03731.jpg')} />
            <img src="/photography/DSC03744.jpg" className="rounded shadow-md" onClick={() => setInspectedImage('/photography/DSC03744.jpg')} />
            <img src="/photography/DSC03792.jpg" className="rounded shadow-md" onClick={() => setInspectedImage('/photography/DSC03792.jpg')} />
            <img src="/photography/DSC03835.jpg" className="rounded shadow-md" onClick={() => setInspectedImage('/photography/DSC03835.jpg')} />
            <img src="/photography/DSC03866.jpg" className="rounded shadow-md" onClick={() => setInspectedImage('/photography/DSC03866.jpg')} />
            <img src="/photography/DSC03881.jpg" className="rounded shadow-md" onClick={() => setInspectedImage('/photography/DSC03881.jpg')} />
            <img src="/photography/DSC04007.jpg" className="rounded shadow-md" onClick={() => setInspectedImage('/photography/DSC04007.jpg')} />
            <img src="/photography/DSC04041.jpg" className="rounded shadow-md" onClick={() => setInspectedImage('/photography/DSC04041.jpg')} />
            <img src="/photography/DSC04141.jpg" className="rounded shadow-md" onClick={() => setInspectedImage('/photography/DSC04141.jpg')} />
            <img src="/photography/DSC04150.jpg" className="rounded shadow-md" onClick={() => setInspectedImage('/photography/DSC04150.jpg')} />
            <img src="/photography/DSC04166.jpg" className="rounded shadow-md" onClick={() => setInspectedImage('/photography/DSC04166.jpg')} />
            <img src="/photography/DSC04207.jpg" className="rounded shadow-md" onClick={() => setInspectedImage('/photography/DSC04207.jpg')} />
            <img src="/photography/DSC04230.jpg" className="rounded shadow-md" onClick={() => setInspectedImage('/photography/DSC04230.jpg')} />
            <img src="/photography/DSC04249.jpg" className="rounded shadow-md" onClick={() => setInspectedImage('/photography/DSC04249.jpg')} />
            <img src="/photography/DSC04291.jpg" className="rounded shadow-md" onClick={() => setInspectedImage('/photography/DSC04291.jpg')} />
            <img src="/photography/DSC04516.jpg" className="rounded shadow-md" onClick={() => setInspectedImage('/photography/DSC04516.jpg')} />


          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  );
}
