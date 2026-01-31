'use client'

import { useEffect } from 'react';
import { Folder } from '../Folder';
import { Document } from '../Document';
import { useWindowManager } from '../useWindowManager/useWindowManager';
import { WindowFactory } from '../WindowFactory/WindowFactory';
import { Designs } from '../WindowFactory/WindowTypes/Designs';
import { FiFileText, FiBook, FiHeart, FiCloud, FiEdit, FiBarChart2, FiCamera, FiImage, FiDribbble } from 'react-icons/fi'; // React Icons
import GlassIcons from '@/components/GlassIcons'; // Adjusted relative path

export function Desktop() {
  const { windows, openWindow, closeWindow } = useWindowManager();

  useEffect(() => {
    console.log('Open windows:', windows);
  }, [windows]);

  // update with your own icons and colors
  const items = [
    { icon: <FiFileText />, color: 'blue', label: 'About Me', onClick: () => openWindow('aboutmedocument') },
    { icon: <FiImage />, color: 'purple', label: 'Generative AI Prompting', onClick: () => openWindow('GenAIPrompting') },
    { icon: <FiCamera />, color: 'red', label: 'Photography', onClick: () => openWindow('photography') },
    { icon: <FiDribbble />, color: 'indigo', label: 'Sports Team Media', onClick: () => window.open('https://www.instagram.com/assketballers/') },
    { icon: <FiEdit />, color: 'orange', label: 'Mixed Media Art', onClick: () => window.open('https://www.instagram.com/designwithjayc/') },
    { icon: <FiBook />, color: 'green', label: 'Church Camp Designs', onClick: () => openWindow('churchdesigns') },
    // could add links later for compsci projects
  ];



  return (
    <div className="relative w-full h-screen">
      {/* Folders on desktop */}
      {/* <div className="flex flex-wrap gap-4 p-6">
        <Document name="About Me" onClick={() => openWindow('aboutmedocument')} />
        <Folder name="Designs" onClick={() => openWindow('designs')} />
        <Folder name="Projects" onClick={() => openWindow('projects')} />
      </div> */}

      
    <div
      style={{
        height: '600px',
        display: 'flex',
        justifyContent: 'center',   // horizontal
        alignItems: 'center',       // vertical
      }}
    >
      <GlassIcons items={items} className="custom-class" colorful={false} />
    </div>

      {/* Render windows */}
      <WindowFactory windows={windows} onClose={closeWindow} openWindow={openWindow} />


    </div>
  );
}