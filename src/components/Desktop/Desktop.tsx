'use client'

import { useEffect } from 'react';
import { Folder } from '../Folder';
import { Document } from '../Document';
import { useWindowManager } from '../useWindowManager/useWindowManager';
import { WindowFactory } from '../WindowFactory/WindowFactory';
import { Designs } from '../WindowFactory/WindowTypes/Designs';
import { FiFileText, FiBook, FiHeart, FiCloud, FiEdit, FiBarChart2 } from 'react-icons/fi'; // React Icons
import GlassIcons from '@/components/GlassIcons'; // Adjusted relative path

export function Desktop() {
  const { windows, openWindow, closeWindow } = useWindowManager();

  useEffect(() => {
    console.log('Open windows:', windows);
  }, [windows]);

  // update with your own icons and colors
  const items = [
    { icon: <FiFileText />, color: 'blue', label: 'Files' },
    { icon: <FiBook />, color: 'purple', label: 'Books' },
    { icon: <FiHeart />, color: 'red', label: 'Health' },
    { icon: <FiCloud />, color: 'indigo', label: 'Weather' },
    { icon: <FiEdit />, color: 'orange', label: 'Notes' },
    { icon: <FiBarChart2 />, color: 'green', label: 'Stats' },
  ];



  return (
    <div className="relative w-full h-screen">
      {/* Folders on desktop */}
      <div className="flex flex-wrap gap-4 p-6">
        <Document name="About Me" onClick={() => openWindow('aboutmedocument')} />
        <Folder name="Designs" onClick={() => openWindow('designs')} />
        <Folder name="Projects" onClick={() => openWindow('projects')} />
      </div>

      <div style={{ height: '600px', position: 'relative' }}>
        <GlassIcons items={items} className="custom-class"
        />
      </div>

      {/* Render windows */}
      <WindowFactory windows={windows} onClose={closeWindow} openWindow={openWindow} />


    </div>
  );
}