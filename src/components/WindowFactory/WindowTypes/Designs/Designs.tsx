// src/components/WindowTypes/AboutMe.tsx
import { Folder } from '../../../Folder';

interface DesignsProps {
  openWindow: (windowName: string) => void;
}

export function Designs({ openWindow }: DesignsProps) {
    return (
      <div className="flex p-4 space-y-4">

      <Folder name="Personal Posters" onClick={() => openWindow('personalposters')} />
      <Folder name="GenAI Posters" onClick={() => openWindow('designs')} />
      {/* <Folder name="Sports " onClick={() => openWindow('designs')} /> */}


        {/* Text / "blog post" */}
        <div className="text-center space-y-2">

        </div>
      </div>
    );
  }
  