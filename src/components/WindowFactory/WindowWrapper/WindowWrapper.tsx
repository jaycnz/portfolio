

import { ReactNode, useRef, memo } from 'react';
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
  const defaultTop = isMobile ? '0px' : '20px';
  const defaultLeft = isMobile ? '0px' : '20px';
  const initialTop = spawnPosition?.top ?? defaultTop;
  const initialLeft = spawnPosition?.left ?? defaultLeft;

  return (
    <Draggable nodeRef={nodeRef} handle=".window-header" bounds="body" cancel=".no-drag"> 
      <div
        ref={nodeRef}
        onPointerDown={() => onFocus?.(id)}
        style={{ width, height, zIndex: priority, top: initialTop, left: initialLeft }}
        className="stroker border bg-black absolute flex flex-col"
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
