'use client';

import { useCallback, useLayoutEffect, useRef, useState, type ReactNode } from 'react';
import dynamic from 'next/dynamic';
import type { DraggableEventHandler } from 'react-draggable';
import { Locate } from 'lucide-react';
import { cn } from '@/lib/utils';

// react-draggable touches the DOM directly, so it can't run on the server.
const Draggable = dynamic(() => import('react-draggable'), { ssr: false });

/**
 * Size of the pannable map surface, in pixels. This is the "sheet" you drag
 * around under the viewport — bump it up later if placed components need
 * more room to spread out.
 */
const MAP_WIDTH = 3000;
const MAP_HEIGHT = 2000;

/** Spacing between dots on the scrap-mat grid, in pixels. */
const DOT_SPACING = 28;
const DOT_RADIUS = 1.5;
const DOT_COLOR = 'rgba(148, 163, 184, 0.35)'; // slate-400 @ 35%

/**
 * A single thing placed on the map. `x`/`y` are in map-surface coordinates
 * (pixels from the map's top-left corner), not screen coordinates — so a
 * placed item stays put relative to the mat as it's dragged around.
 *
 * Not used yet — this is the slot future components (photos, notes, widgets
 * you can place on the board) will plug into.
 */
export interface MapItem {
  id: string;
  x: number;
  y: number;
  content: ReactNode;
}

interface DotMapProps {
  items?: MapItem[];
  className?: string;
}

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export function DotMap({ items = [], className }: DotMapProps) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const nodeRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isReady, setIsReady] = useState(false);

  const centerMap = useCallback(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const { clientWidth, clientHeight } = viewport;
    setPosition({
      x: clamp(-(MAP_WIDTH - clientWidth) / 2, -(MAP_WIDTH - clientWidth), 0),
      y: clamp(-(MAP_HEIGHT - clientHeight) / 2, -(MAP_HEIGHT - clientHeight), 0),
    });
  }, []);

  useLayoutEffect(() => {
    centerMap();
    setIsReady(true);

    const viewport = viewportRef.current;
    if (!viewport) return;

    // On resize, re-clamp (don't re-center) so a mid-drag position isn't
    // reset out from under the user, but the map can't get stranded
    // outside the viewport either.
    const observer = new ResizeObserver(() => {
      const { clientWidth, clientHeight } = viewport;
      setPosition((prev) => ({
        x: clamp(prev.x, -(MAP_WIDTH - clientWidth), 0),
        y: clamp(prev.y, -(MAP_HEIGHT - clientHeight), 0),
      }));
    });
    observer.observe(viewport);
    return () => observer.disconnect();
  }, [centerMap]);

  const handleDrag: DraggableEventHandler = (_event, data) => {
    setPosition({ x: data.x, y: data.y });
  };

  return (
    <div
      ref={viewportRef}
      className={cn('relative h-full w-full touch-none overflow-hidden bg-slate-900', className)}
    >
      <Draggable
        nodeRef={nodeRef}
        bounds="parent"
        position={position}
        onDrag={handleDrag}
        onStop={handleDrag}
      >
        <div
          ref={nodeRef}
          className={cn(
            'absolute left-0 top-0 cursor-grab select-none active:cursor-grabbing',
            !isReady && 'invisible'
          )}
          style={{
            width: MAP_WIDTH,
            height: MAP_HEIGHT,
            backgroundImage: `radial-gradient(circle, ${DOT_COLOR} ${DOT_RADIUS}px, transparent ${DOT_RADIUS}px)`,
            backgroundSize: `${DOT_SPACING}px ${DOT_SPACING}px`,
          }}
        >
          {items.map((item) => (
            <div key={item.id} className="absolute" style={{ left: item.x, top: item.y }}>
              {item.content}
            </div>
          ))}
        </div>
      </Draggable>

      <button
        type="button"
        onClick={centerMap}
        className="absolute bottom-3 right-3 z-10 flex items-center gap-1.5 rounded-full border border-white/10 bg-black/60 px-3 py-1.5 text-xs text-white/80 backdrop-blur transition hover:bg-black/80 hover:text-white"
      >
        <Locate className="h-3.5 w-3.5" />
        Recenter
      </button>
    </div>
  );
}