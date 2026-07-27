"use client";

import { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

interface Props {
  images: string[];
}

export function MasonryWrapper({ images }: Props) {
  const [inspectedImage, setInspectedImage] = useState<string | null>(null);

  return (
    <>
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

      {inspectedImage && (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
        onClick={() => setInspectedImage(null)}
      >
        <img
          src={inspectedImage}
          className="max-h-[90vh] max-w-[90vw] object-contain"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    )}
      
    </>
  );
}