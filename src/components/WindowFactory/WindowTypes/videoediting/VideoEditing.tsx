interface VideoEditingProps {
  setInspectedImage: (image: string | null) => void;
}
// src/components/WindowTypes/AboutMe.tsx
export function VideoEditing({ setInspectedImage }: VideoEditingProps) {
  return (
    <div className="flex flex-col p-4 space-y-4 overflow-y-auto h-full">
      <h1 className="flex font-bold text-xl">Video Editing (WIP)</h1>
      <p>Video editing is perhaps the longest creative practice I have spent time on, starting very early on with windows movie maker, progressing to tools Sony Vegas Pro 16, then eventually Adobe Premiere Pro and DaVinci Resolve.
        <br />
        <p>  While much of my early work is archived, the pieces below represent the
          projects I still feel best showcase my editing style and technical growth.</p>
        <br />
        <br />
        <a href="https://www.tiktok.com/@jay.chn" className="Link" target="_blank">My TikTok</a>

        <br />
        <br />

        <div className="w-full flex justify-center">
          <iframe
            className="w-full max-w-3xl aspect-video rounded-lg"
            src="https://www.youtube.com/embed/JP2PTDJBiSw"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <br />
        <div className="w-full flex justify-center">
          <iframe
            className="w-full max-w-sm aspect-[9/16] rounded-lg"
            src="https://www.tiktok.com/embed/v2/7561240156532018450"
            scrolling="no"
            allowFullScreen
          />
        </div>
        <br />
        <div className="w-full flex justify-center">
          <iframe
            className="w-full max-w-sm aspect-[9/16] rounded-lg"
            src="https://www.tiktok.com/embed/v2/7578053869645647124"
            scrolling="no"
            allowFullScreen
          />
        </div>
        <br />
        <div className="w-full flex justify-center">
          <iframe
            className="w-full max-w-3xl aspect-video rounded-lg"
            src="https://www.youtube.com/embed/MhNvv3z2KkM"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </p>

      <div className="w-full flex justify-center">
      </div>

    </div>

  );
}
