import { memo, useEffect, useState } from 'react';
import { WindowWrapper } from './WindowWrapper';
import { AboutMe } from './WindowTypes/AboutMe';
import { Designs } from './WindowTypes/Designs';
import { GenAIVisuals } from './WindowTypes/GenAIVisuals/GenAIVisuals';
import { PersonalPosters } from './WindowTypes/PersonalPosters/PersonalPosters';
import { ChurchDesigns } from './WindowTypes/ChurchDesigns.tsx/ChurchDesigns';
// import { FileWindow } from './windowContents/FileWindow'; DO LATER

function WindowFactoryComponent({ windows, onClose, openWindow }: { windows: any[], onClose: (id: string) => void, openWindow: (windowName: string) => void}) {
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
        const commonProps = {
          key: window,
          priority: index,
          id: window,
          onClose: onClose,
          isMobile: isMobile,
          width: isMobile ? windowWidth : 400,
          height: isMobile ? windowHeight : 550,
        };
        switch (window) {
          case 'aboutmedocument':
            return (
              <WindowWrapper title="About me" {...commonProps}>
                <AboutMe/>
              </WindowWrapper>
            );
          case 'designs':
            return (
              <WindowWrapper title="Designs" {...commonProps}>
                <Designs openWindow={openWindow}/>
              </WindowWrapper>
            );

            case 'GenAIPrompting':
              return (
                <WindowWrapper title="Generative AI Visual Prompting" {...commonProps}>
                  <GenAIVisuals/>
                </WindowWrapper>
              );
          case 'PersonalPosters':
            return (
              <WindowWrapper title="Personal Posters" key={window} priority={index} height={650} width={600} id={window} onClose={onClose}>
                <PersonalPosters/>
              </WindowWrapper>
            );
            case 'churchdesigns':
              return (
                <WindowWrapper title="Church Camp Designs" {...commonProps}>
                  <ChurchDesigns/>
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
