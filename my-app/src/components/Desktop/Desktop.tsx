'use client'

import { useState } from 'react';
import { Folder } from '../Folder';

export function Desktop() {
  const [windows, setWindows] = useState([]);

  function openWindow(windowName: String) {
    // should open window corresponding to name of window
    return null
  }

  return (
    <div className="relative w-full h-screen bg-zinc-100 dark:bg-zinc-950">
      {/* Folders on desktop */}
      <div className="flex flex-wrap gap-4 p-6">
        <Folder name="Designs" onClick={() => openWindow('About Me')} />
        <Folder name="About Me" onClick={() => openWindow('Designs')} />
        <Folder name="Projects" onClick={() => openWindow('Projects')} />
      </div>
    </div>
  );
}
