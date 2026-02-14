import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

// src/components/WindowTypes/AboutMe.tsx
interface PhotographyProps {
  setInspectedImage: (image: string | null) => void;
}

const images = [
  '/photography/DSC03713.jpg',
  '/photography/DSC03731.jpg',
  '/photography/DSC03744.jpg',
  '/photography/DSC03792.jpg',
  '/photography/DSC03835.jpg',
  '/photography/DSC03866.jpg',
  '/photography/DSC03881.jpg',
  '/photography/DSC04007.jpg',
  '/photography/DSC04041.jpg',
  '/photography/DSC04141.jpg',
  '/photography/DSC04150.jpg',
  '/photography/DSC04166.jpg',
  '/photography/DSC04207.jpg',
  '/photography/DSC04230.jpg',
  '/photography/DSC04249.jpg',
  '/photography/DSC04291.jpg',
  '/photography/DSC04516.jpg',
];

export function Photography({ setInspectedImage }: PhotographyProps) {
  return (
    <div className="flex flex-col items-center p-4 space-y-4 overflow-y-auto h-full">
      {/* Text / "blog post" */}
      <div className="space-y-2">
        <h2 className="text-xl font-bold">Photography</h2>
        <p className="text-sm text-left">
          I just got my first camera this year! Here are some of my favorite shots I've taken so far.
        </p>
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
      </div>
    </div>
  );
}
