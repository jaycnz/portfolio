import fs from 'fs';
import path from 'path';
import { MasonryWrapper } from '@/src/components/MasonryWrapper/MasonryWrapper';

export default function ResumePage() {
  const dir = path.join(process.cwd(), 'public/photography');

  const images = fs
    .readdirSync(dir)
    .filter(file => /\.(jpg|jpeg)$/i.test(file))
    .map(file => `/photography/${file}`);

  return (
    <div className="min-h-screen w-full bg-black">
      <MasonryWrapper images={images} />
    </div>
  );
}