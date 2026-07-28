"use client";

import { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { ImageDialog } from "../ImageDialog/ImageDialog";

interface ImageItem {
  thumbnails: string;
  full: string;
}

interface Props {
  images: ImageItem[];
}

export function MasonryWrapper({ images }: Props) {
  const [inspectedImage, setInspectedImage] = useState<string | null>(null);

  return (
    <div className="px-2">
      <ResponsiveMasonry columnsCountBreakPoints={{70: 1, 150: 2, 180: 3}}>
        <Masonry gutter="10px">
          {images.map((image, idx) => (
            <img
              src={image.thumbnails}
              key={image.full}
              alt={`Photography ${idx + 1}`}
              className="w-full rounded shadow-md cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => setInspectedImage(image.full)}
              loading="lazy"
              decoding="async"
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>

      <ImageDialog
        image={inspectedImage}
        onClose={() => setInspectedImage(null)}
      />
      
    </div>
  );
}