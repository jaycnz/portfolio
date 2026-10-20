

import { useState, ReactNode, useRef, memo } from 'react';
import dynamic from 'next/dynamic';

const Draggable = dynamic(() => import('react-draggable'), { ssr: false });

interface WindowSpawnPosition {
  top?: string | number;
  left?: string | number;
}

interface WindowWrapperProps {
  id: string;
  title: string;
  priority: number;
  onClose: (id: string) => void;
  onFocus?: (id: string) => void;
  children: ReactNode;
  width?: number;
  height?: number;
  isMobile?: boolean;
  setInspectedImage?: (image: string | null) => void;
  spawnPosition?: WindowSpawnPosition;
}

let spawnCount = 0;

function WindowWrapperComponent({
  id,
  title,
  priority,
  onClose,
  onFocus,
  children,
  width,
  height,
  isMobile,
  setInspectedImage,
  spawnPosition,
}: WindowWrapperProps) {
  const nodeRef = useRef<HTMLDivElement>(null);
  // Work out where this window opens, once. Each new window steps 28px down-right.
  const [spawn] = useState(() => {
    const offset = (spawnCount++ % 6) * 28;
    const w = width ?? 400;
    const h = height ?? 550;
    return {
      top: Math.max(16, Math.min(96 + offset, window.innerHeight - h - 16)),
      left: Math.max(16, (window.innerWidth - w) / 2 + offset - 84),
    };
  });
  const initialTop = spawnPosition?.top ?? (isMobile ? '0px' : `${spawn.top}px`);
  const initialLeft = spawnPosition?.left ?? (isMobile ? '0px' : `${spawn.left}px`);

  return (
    <Draggable nodeRef={nodeRef} handle=".window-header" bounds="body" cancel=".no-drag"> 
      <div
        ref={nodeRef}
        onPointerDown={() => onFocus?.(id)}
        style={{ width, height, zIndex: priority, top: initialTop, left: initialLeft }}
        className="fixed flex flex-col overflow-hidden rounded-[1.25rem] border-2 border-white bg-[#dcd5d5] text-[#3a3338] shadow-2xl"
      >
        <div className="window-header flex flex-shrink-0 cursor-grab items-center justify-between border-b-2 border-white bg-[#3b2f40] px-4 py-2 active:cursor-grabbing">
          <h2 className="font-display text-2xl uppercase tracking-wide text-white">{title}</h2>
          <button
            type="button"
            aria-label="Close window"
            className="no-drag transition hover:brightness-110 active:scale-95"
            onClick={() => onClose(id)}
          >
            <img src="/images/close_button.png" alt="" className="h-7 w-auto" />
          </button>
        </div>
        <div className="flex-1 overflow-hidden">{children}</div>
      </div>
    </Draggable>

  );
}

export const WindowWrapper = memo(WindowWrapperComponent);
