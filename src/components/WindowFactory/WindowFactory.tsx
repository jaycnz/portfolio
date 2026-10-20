import { memo, useEffect, useState } from 'react';
import { WindowWrapper } from './WindowWrapper';
import { AboutMe } from './WindowTypes/AboutMe';
import { Resume } from './WindowTypes/Resume/Resume';
import { ProjectWindow } from './WindowTypes/ProjectWindow/ProjectWindow';
import { windowContent } from '@/src/data/windowContent';

interface WindowFactoryProps {
  windows: string[];
  onClose: (id: string) => void;
  openWindow: (windowName: string) => void;
  setInspectedImage: (image: string | null) => void;
}

function WindowFactoryComponent({ windows, onClose, openWindow, setInspectedImage }: WindowFactoryProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [windowHeight, setWindowHeight] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {windows.map((id, index) => {
        const priority = windows.length - index;
        const w = (desktop: number) => (isMobile ? windowWidth : desktop);
        const h = (desktop: number) => (isMobile ? windowHeight : desktop);

        // Every project window comes from src/data/windowContent.ts
        const project = windowContent[id];
        if (project) {
          return (
            <WindowWrapper
              key={id}
              id={id}
              title={project.title}
              priority={priority}
              onClose={onClose}
              onFocus={openWindow}
              isMobile={isMobile}
              width={w(820)}
              height={h(520)}
              setInspectedImage={setInspectedImage}
            >
              <ProjectWindow content={project} setInspectedImage={setInspectedImage} />
            </WindowWrapper>
          );
        }

        switch (id) {
          case 'aboutmedocument':
            return (
              <WindowWrapper key={id} id={id} title="About me" priority={priority} onClose={onClose} onFocus={openWindow}
                isMobile={isMobile} width={w(400)} height={h(650)} setInspectedImage={setInspectedImage}>
                <AboutMe />
              </WindowWrapper>
            );
          case 'resume':
            return (
              <WindowWrapper key={id} id={id} title="Resume" priority={priority} onClose={onClose} onFocus={openWindow}
                isMobile={isMobile} width={w(400)} height={h(620)} setInspectedImage={setInspectedImage}>
                <Resume setInspectedImage={setInspectedImage} />
              </WindowWrapper>
            );
          default:
            return null;
        }
      })}
    </>
  );
}

export const WindowFactory = memo(WindowFactoryComponent);