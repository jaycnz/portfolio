import { WindowWrapper } from './WindowWrapper';
import { AboutMe } from './WindowTypes/AboutMe';
import { Designs } from './WindowTypes/Designs';
import { GenAIVisuals } from './WindowTypes/GenAIVisuals/GenAIVisuals';
import { PersonalPosters } from './WindowTypes/PersonalPosters/PersonalPosters';
// import { FileWindow } from './windowContents/FileWindow'; DO LATER

export function WindowFactory({ windows, onClose, openWindow }: { windows: any[], onClose: (id: string) => void, openWindow: (windowName: string) => void}) {
  return (
    <>
      {windows.map((window, index) => {
        const zIndex = windows.length - index;
        switch (window) {
          case 'aboutmedocument':
            return (
              <WindowWrapper title="About me" key={window} priority={zIndex} height={550} width={400} id={window} onClose={onClose}>
                <AboutMe/>
              </WindowWrapper>
            );
          case 'designs':
            return (
              <WindowWrapper title="Designs" key={window} priority={zIndex} height={550} width={400} id={window} onClose={onClose}>
                <Designs openWindow={openWindow}/>
              </WindowWrapper>
            );

            case 'GenAIPrompting':
              return (
                <WindowWrapper title="Generative AI Visual Prompting" key={window} priority={zIndex} height={550} width={600} id={window} onClose={onClose}>
                  <GenAIVisuals/>
                </WindowWrapper>
              );
          case 'PersonalPosters':
            return (
              <WindowWrapper title="Personal Posters" key={window} priority={zIndex} height={650} width={600} id={window} onClose={onClose}>
                <PersonalPosters/>
              </WindowWrapper>
            );
          default:
            return null;
        }
      })}
    </>
  );
}
