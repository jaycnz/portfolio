'use client'

import { useEffect } from 'react';
import { Folder } from '../Folder';
import { Document } from '../Document';
import { useWindowManager } from '../useWindowManager/useWindowManager';
import { WindowFactory } from '../WindowFactory/WindowFactory';
import { Designs } from '../WindowFactory/WindowTypes/Designs';

export function Desktop() {
  const { windows, openWindow, closeWindow } = useWindowManager();

  useEffect(() => {
    console.log('Open windows:', windows);
  }, [windows]);

  return (
    <div className="relative w-full h-screen">
      {/* Folders on desktop */}
      <div className="flex flex-wrap gap-4 p-6">
        <Document name="About Me" onClick={() => openWindow('aboutmedocument')} />
        <Folder name="Designs" onClick={() => openWindow('designs')} />
        <Folder name="Projects" onClick={() => openWindow('projects')} />
      </div>

      {/* Render windows */}
      <WindowFactory windows={windows} onClose={closeWindow} openWindow={openWindow} />


    </div>
  );
}