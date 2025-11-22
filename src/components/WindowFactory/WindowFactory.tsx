import { WindowWrapper } from './WindowWrapper';
import { AboutMe } from './WindowTypes/AboutMe';
import { Designs } from './WindowTypes/Designs';
import { GenAIVisuals } from './WindowTypes/GenAIVisuals/GenAIVisuals';
// import { FileWindow } from './windowContents/FileWindow'; DO LATER

export function WindowFactory({ windows, onClose, openWindow }: { windows: any[], onClose: (id: string) => void, openWindow: (windowName: string) => void}) {
  return (
    <>
      {windows.map((window, index) => {
        switch (window) {
          case 'aboutmedocument':
            return (
              <WindowWrapper title="About me" key={window} priority={index} height={550} width={400} id={window} onClose={onClose}>
                <AboutMe/>
              </WindowWrapper>
            );
          case 'designs':
            return (
              <WindowWrapper title="Designs" key={window} priority={index} height={550} width={400} id={window} onClose={onClose}>
                <Designs openWindow={openWindow}/>
              </WindowWrapper>
            );

            case 'GenAIPrompting':
              return (
                <WindowWrapper title="Generative AI Visual Prompting" key={window} priority={index} height={550} width={600} id={window} onClose={onClose}>
                  <GenAIVisuals/>
                </WindowWrapper>
              );
          // case 'projects':
          //   return (
          //     <WindowWrapper key={win.id} {...win} onClose={onClose}>
          //       <DocumentWindow text={win.content?.text} />
          //     </WindowWrapper>
          //   );
          default:
            return null;
        }
      })}
    </>
  );
}
