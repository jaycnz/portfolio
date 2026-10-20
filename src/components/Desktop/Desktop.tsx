'use client'

import { FiFileText, FiEdit, FiImage, FiDribbble, FiGithub, FiUser } from 'react-icons/fi';
import GlassIcons from '@/components/GlassIcons';
import { useWindows } from '../WindowProvider';

export function Desktop() {
  const { openWindow } = useWindows();

  const items = [
    { icon: <FiUser />, color: 'blue', label: 'About Me', onClick: () => openWindow('aboutmedocument') },
    { icon: <FiFileText />, color: 'red', label: 'Resume', onClick: () => openWindow('resume') },
    { icon: <FiImage />, color: 'purple', label: 'Generative AI Prompting', onClick: () => openWindow('GenAIPrompting') },
    { icon: <FiGithub />, color: 'orange', label: 'Projects', onClick: () => window.open('https://github.com/jaycnz') },
    { icon: <FiDribbble />, color: 'indigo', label: 'Sports Team Media', onClick: () => window.open('https://www.instagram.com/assketballers/') },
    { icon: <FiEdit />, color: 'orange', label: 'Mixed Media Art', onClick: () => window.open('https://www.instagram.com/designwithjayc/') },
  ];

  return (
    <div className="relative w-full h-screen">
      <div
        style={{
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <GlassIcons items={items} className="custom-class" colorful={false} />
      </div>
    </div>
  );
}