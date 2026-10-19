

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
        className="stroker border bg-black fixed flex flex-col"
      >
        <div className="window-header flex justify-between items-center border-b pb-1 px-3 flex-shrink-0">
          <h2 className="font-bold">{title}</h2>
          <button className="no-drag" style={{zIndex: 1000}} onClick={() => onClose(id)}>✕</button>
        </div>
        <div className="p-2 flex-1 overflow-hidden">{children}</div>
      </div>
    </Draggable>

  );
}

export const WindowWrapper = memo(WindowWrapperComponent);
