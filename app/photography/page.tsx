import fs from 'fs';
import path from 'path';
import { MasonryWrapper } from '@/src/components/MasonryWrapper/MasonryWrapper';

export default function PhotographyPage() {
  const thumbnailDir = path.join(
    process.cwd(), 'public/photography/thumbnails'
  );

  const images = fs
    .readdirSync(thumbnailDir)
    .filter((file) => /\.(jpg|jpeg)$/i.test(file))
    .map((file) => ({
      thumbnails: `/photography/thumbnails/${file}`,
      full: `/photography/full/${file}`,
    }));

  return (
    <div className="min-h-screen w-full bg-black">
      <MasonryWrapper images={images} />
    </div>
  );
}