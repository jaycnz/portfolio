'use client'

import { useState, useEffect } from 'react';
import { Folder } from '../Folder';
import { useWindowManager } from '../useWindowManager';

export function Desktop() {
  const { windows, openWindow } = useWindowManager();

  useEffect(() => {
    console.log('Open windows:', windows);
  }, [windows]);


  return (
    <div className="relative w-full h-screen bg-zinc-100 dark:bg-zinc-950">
      {/* Folders on desktop */}
      <div className="flex flex-wrap gap-4 p-6">
        <Folder name="About Me" onClick={() => openWindow('About Me')} />
        <Folder name="Designs" onClick={() => openWindow('Designs')} />
        <Folder name="Projects" onClick={() => openWindow('Projects')} />
      </div>
    </div>
  );
}
