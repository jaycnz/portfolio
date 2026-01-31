import { memo, useEffect, useState } from 'react';
import { WindowWrapper } from './WindowWrapper';
import { AboutMe } from './WindowTypes/AboutMe';
import { Designs } from './WindowTypes/Designs';
import { GenAIVisuals } from './WindowTypes/GenAIVisuals/GenAIVisuals';
import { PersonalPosters } from './WindowTypes/PersonalPosters/PersonalPosters';
import { ChurchDesigns } from './WindowTypes/ChurchDesigns.tsx/ChurchDesigns';
// import { FileWindow } from './windowContents/FileWindow'; DO LATER

function WindowFactoryComponent({ windows, onClose, openWindow }: { windows: any[], onClose: (id: string) => void, openWindow: (windowName: string) => void }) {
  const [isMobile, setIsMobile] = useState(false);
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [windowHeight, setWindowHeight] = useState<number>(0);

  useEffect(() => {

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
      setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
    };

    handleResize(); // Set initial state (runs only on client)
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {windows.map((window, index) => {
        const zIndex = windows.length - index;

        switch (window) {
          case 'aboutmedocument':
            return (
              <WindowWrapper 
                key={window}
                title="About me" 
                priority={zIndex}
                id={window}
                onClose={onClose}
                isMobile={isMobile}
                width={isMobile ? windowWidth : 400}
                height={isMobile ? windowHeight : 550}
              >
                <AboutMe />
              </WindowWrapper>
            );
          case 'designs':
            return (
              <WindowWrapper 
                key={window}
                title="Designs" 
                priority={zIndex}
                id={window}
                onClose={onClose}
                isMobile={isMobile}
                width={isMobile ? windowWidth : 500}
                height={isMobile ? windowHeight : 600}
              >
                <Designs openWindow={openWindow} />
              </WindowWrapper>
            );

          case 'GenAIPrompting':
            return (
              <WindowWrapper 
                key={window}
                title="Generative AI Visual Prompting" 
                priority={zIndex}
                id={window}
                onClose={onClose}
                isMobile={isMobile}
                width={isMobile ? windowWidth : 600}
                height={isMobile ? windowHeight : 800}
              >
                <GenAIVisuals />
              </WindowWrapper>
            );
          case 'PersonalPosters':
            return (
              <WindowWrapper 
                key={window}
                title="Personal Posters" 
                priority={zIndex}
                id={window}
                onClose={onClose}
                isMobile={isMobile}
                width={isMobile ? windowWidth : 600}
                height={isMobile ? windowHeight : 650}
              >
                <PersonalPosters />
              </WindowWrapper>
            );
          case 'churchdesigns':
            return (
              <WindowWrapper 
                key={window}
                title="Church Camp Designs" 
                priority={zIndex}
                id={window}
                onClose={onClose}
                isMobile={isMobile}
                width={isMobile ? windowWidth : 400}
                height={isMobile ? windowHeight : 550}
              >
                <ChurchDesigns />
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
