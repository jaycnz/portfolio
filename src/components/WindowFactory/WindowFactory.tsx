import { memo, useEffect, useState } from 'react';
import { WindowWrapper } from './WindowWrapper';
import { AboutMe } from './WindowTypes/AboutMe';
import { GenAIVisuals } from './WindowTypes/GenAIVisuals/GenAIVisuals';
import { ChurchDesigns } from './WindowTypes/ChurchDesigns.tsx/ChurchDesigns';
import { Photography } from './WindowTypes/Photography/Photography';
import { VideoEditing } from './WindowTypes/videoediting/VideoEditing';
// import { FileWindow } from './windowContents/FileWindow'; DO LATER

function WindowFactoryComponent({ windows, onClose, openWindow, setInspectedImage }: { windows: any[], onClose: (id: string) => void, openWindow: (windowName: string) => void, setInspectedImage: (image: string | null) => void }) {
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

    if (!isMobile) {
      openWindow('aboutmedocument')
      console.log(window.innerWidth)
      console.log(isMobile); 
    }

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
                onFocus={openWindow}
                isMobile={isMobile}
                width={isMobile ? windowWidth : 400}
                height={isMobile ? windowHeight : 650 }
                setInspectedImage={setInspectedImage}
              >
                <AboutMe />
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
                onFocus={openWindow}
                isMobile={isMobile}
                width={isMobile ? windowWidth : 500}
                height={isMobile ? windowHeight : 700}
                setInspectedImage={setInspectedImage}
              >
                <GenAIVisuals setInspectedImage={setInspectedImage}/>
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
                onFocus={openWindow}
                isMobile={isMobile}
                width={isMobile ? windowWidth : 400}
                height={isMobile ? windowHeight : 550}
                setInspectedImage={setInspectedImage}
              >
                <ChurchDesigns setInspectedImage={setInspectedImage}/>
              </WindowWrapper>
            );
            case 'photography':
              return (
                <WindowWrapper
                  key={window}
                  title="Photography"
                  priority={zIndex}
                  id={window}
                  onClose={onClose}
                  onFocus={openWindow}
                  isMobile={isMobile}
                  width={isMobile ? windowWidth : 400}
                  height={isMobile ? windowHeight : 550}
                  setInspectedImage={setInspectedImage}
                >
                  <Photography setInspectedImage={setInspectedImage}/>
                </WindowWrapper>
            );
            case 'videoediting':
              return (
                <WindowWrapper
                  key={window}
                  title="Video Editing"
                  priority={zIndex}
                  id={window}
                  onClose={onClose}
                  onFocus={openWindow}
                  isMobile={isMobile}
                  width={isMobile ? windowWidth : 400}
                  height={isMobile ? windowHeight : 550}
                  setInspectedImage={setInspectedImage}
                >
                  <VideoEditing setInspectedImage={setInspectedImage}/>
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
