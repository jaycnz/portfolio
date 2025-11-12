import { ReactNode } from 'react';

interface WindowWrapperProps {
  id: string;
  title: string;
  priority: number;
  onClose: (id: string) => void;
  children: ReactNode;
  width?: number;
  height?: number;
}

export function WindowWrapper({
  id,
  title,
  priority,
  onClose,
  children,
  width,
  height,
}: WindowWrapperProps) {
  return (
    <div
      style={{ width, height, zIndex: priority }}
      className="stroker border bg-black absolute top-20 left-20"
      //drag logic for later
    >
      <div className="flex justify-between items-center border-b pb-1 px-3">
        <h2 className="font-bold">{title}</h2>
        <button onClick={() => onClose(id)}>✕</button>
      </div>
      <div className="p-2">{children}</div>
    </div>

  );
}
