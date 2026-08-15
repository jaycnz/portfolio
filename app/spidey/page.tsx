import type { Metadata } from 'next';
import { TrackerFrame } from '@/src/components/Spidey/TrackerFrame';
import { DotMap } from '@/src/components/Spidey/DotMap/Dotmap';

export const metadata: Metadata = {
  title: 'Spidey | Jay Chen',
  description: 'A draggable scrap-map canvas for pinning small interactive pieces.',
};

export default function SpideyPage() {
  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-black p-4 sm:p-8">
      <TrackerFrame>
        <DotMap />
      </TrackerFrame>
    </main>
  );
}