import Image from 'next/image';
import Link from 'next/link';

interface ResumeProps {
  setInspectedImage: (image: string | null) => void;
}

export function Resume({ setInspectedImage }: ResumeProps) {
  void setInspectedImage;

  return (
    <div className="flex h-full flex-col items-center overflow-y-auto p-4">
      <div className="w-full max-w-4xl">
        <Link
          href="/resume"
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-xl border border-white/20 bg-white/10 p-2 shadow-lg transition hover:scale-[1.01]"
        >
          <div className="relative overflow-hidden rounded-lg border border-black/10 bg-white select-none">
            <div className="absolute inset-0 z-10 cursor-pointer" />
            <Image
              src="/resume/resume.png"
              alt="Resume preview"
              width={900}
              height={1200}
              className="h-[50vh] w-full object-contain"
              priority
            />
          </div>
        </Link>
        <p className="mt-2 text-center text-sm text-white/70">Open the full-screen resume page</p>
      </div>
    </div>
  );
}
