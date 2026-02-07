'use client'

import { useEffect, useState } from 'react';
import { useWindowManager } from '../useWindowManager/useWindowManager';
import { WindowFactory } from '../WindowFactory/WindowFactory';
import { FiFileText, FiBook, FiEdit, FiCamera, FiImage, FiDribbble, FiFilm, FiGithub } from 'react-icons/fi'; // React Icons
import GlassIcons from '@/components/GlassIcons'; // Adjusted relative path
import { ImageDialog } from '../ImageDialog/ImageDialog';

export function Desktop() {
  const { windows, openWindow, closeWindow } = useWindowManager();
  const [inspectedImage, setInspectedImage] = useState<string | null>(null);


  useEffect(() => {
    console.log('Open windows:', windows);
  }, [windows]);

  // update with your own icons and colors
  const items = [
    { icon: <FiFileText />, color: 'blue', label: 'About Me', onClick: () => openWindow('aboutmedocument') },
    { icon: <FiImage />, color: 'purple', label: 'Generative AI Prompting', onClick: () => openWindow('GenAIPrompting') },
    { icon: <FiCamera />, color: 'red', label: 'Photography', onClick: () => openWindow('photography') },
    { icon: <FiBook />, color: 'green', label: 'Church Camp Designs', onClick: () => openWindow('churchdesigns') },
    { icon: <FiFilm />, color: 'indigo', label: 'Video Editing', onClick: () => openWindow('videoediting') },
    { icon: <FiGithub />, color: 'orange', label: 'Projects', onClick: () => window.open('https://github.com/jaycnz') },
    { icon: <FiDribbble />, color: 'indigo', label: 'Sports Team Media', onClick: () => window.open('https://www.instagram.com/assketballers/') },
    { icon: <FiEdit />, color: 'orange', label: 'Mixed Media Art', onClick: () => window.open('https://www.instagram.com/designwithjayc/') },
    // could add links later for compsci projects
  ];



  return (
    
    <div className="relative w-full h-screen">
      <ImageDialog image={inspectedImage} onClose={() => setInspectedImage(null)} />

      {/* Folders on desktop */}
      {/* <div className="flex flex-wrap gap-4 p-6">
        <Document name="About Me" onClick={() => openWindow('aboutmedocument')} />
        <Folder name="Designs" onClick={() => openWindow('designs')} />
        <Folder name="Projects" onClick={() => openWindow('projects')} />
      </div> */}

      
    <div
      style={{
        height: '100%',
        display: 'flex',
        justifyContent: 'center',   // horizontal
        alignItems: 'center',       // vertical
      }}
    >
      <GlassIcons items={items} className="custom-class" colorful={false} />
    </div>

      {/* Render windows */}
      <WindowFactory windows={windows} onClose={closeWindow} openWindow={openWindow} setInspectedImage={setInspectedImage} />


    </div>
  );
}