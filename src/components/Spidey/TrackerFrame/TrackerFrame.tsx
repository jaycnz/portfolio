'use client';

import { useState, type ReactNode } from 'react';
import { CircleDot, ScanEye, Volume2, VolumeX } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TrackerFrameProps {
  /** Text shown in the top title pill. */
  title?: string;
  /** Text shown in the bottom status bar. */
  statusText?: string;
  /** Content rendered inside the screen cutout — the DotMap goes here. */
  children: ReactNode;
  className?: string;
}

/**
 * The outer device bezel — a generic HUD-style frame (rounded blue plate,
 * screen cutout, corner accent badges, top title pill, bottom status bar).
 * Deliberately generic rather than a copy of any specific branded artwork,
 * so it's free to skin/reuse however you like.
 */
export function TrackerFrame({
  title = 'TRACKER',
  statusText = 'READY',
  children,
  className,
}: TrackerFrameProps) {
  const [muted, setMuted] = useState(false);

  return (
    <div
      className={cn(
        'relative flex h-[85vh] w-full max-w-5xl flex-col gap-3 rounded-[2rem] border-4 border-sky-300/60 bg-gradient-to-b from-sky-600 to-blue-800 p-4 shadow-[0_0_0_3px_rgba(15,23,42,0.4),0_20px_60px_-15px_rgba(0,0,0,0.6)] sm:p-5',
        className
      )}
    >
      <CornerBadge icon={<ScanEye className="h-4 w-4" />} className="left-3 top-3" />
      <CornerBadge icon={<CircleDot className="h-4 w-4" />} className="right-3 top-3" />

      <div className="mx-auto flex items-center gap-2 rounded-full border-2 border-sky-200/70 bg-slate-900/80 px-5 py-1.5 text-sm font-bold tracking-widest text-sky-100 shadow-inner">
        {title}
      </div>

      <div className="min-h-0 flex-1 overflow-hidden rounded-2xl border-2 border-slate-950/60 bg-slate-950 shadow-inner">
        {children}
      </div>

      <div className="flex items-center gap-3">
        <div className="flex-1 rounded-full border border-sky-200/40 bg-slate-900/70 px-4 py-1.5 text-center text-xs font-medium tracking-wide text-sky-100/80">
          {statusText}
        </div>
        <button
          type="button"
          onClick={() => setMuted((m) => !m)}
          className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-sky-200/40 bg-slate-900/70 text-sky-100/80 transition hover:text-white"
          aria-label={muted ? 'Unmute' : 'Mute'}
        >
          {muted ? <VolumeX className="h-3.5 w-3.5" /> : <Volume2 className="h-3.5 w-3.5" />}
        </button>
      </div>
    </div>
  );
}

function CornerBadge({ icon, className }: { icon: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        'absolute z-10 flex h-9 w-9 items-center justify-center rounded-full border-2 border-sky-200/70 bg-slate-900/80 text-sky-100 shadow-md',
        className
      )}
    >
      {icon}
    </div>
  );
}