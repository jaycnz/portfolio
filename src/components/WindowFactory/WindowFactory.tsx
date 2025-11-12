import { WindowWrapper } from './WindowWrapper';
import { AboutMe } from './WindowTypes/AboutMe';
// import { FileWindow } from './windowContents/FileWindow'; DO LATER

export function WindowFactory({ windows, onClose }: { windows: any[], onClose: (id: string) => void }) {
  return (
    <>
      {windows.map((window, index) => {
        switch (window) {
          case 'aboutmedocument':
            return (
              <WindowWrapper title="About me" key={window} priority={index} height={400} width={300} id={window} onClose={onClose}>
                <AboutMe/>
              </WindowWrapper>
            );
          // case 'designs':
          //   return (
          //     <WindowWrapper key={win.id} {...win} onClose={onClose}>
          //     <FileWindow images={win.content?.images} />
          //   </WindowWrapper>
          //   );
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
