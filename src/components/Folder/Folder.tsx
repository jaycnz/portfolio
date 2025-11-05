import { useState } from "react";

export function Folder(props: { name: string; onClick: () => void }) {

  const [isHovered, setHover] = useState(false)

  return (
    <button
      onClick={props.onClick}
      className="flex flex-col items-center justify-center w-20 text-sm text-center hover:opacity-80"
    >
      <img
        src = {isHovered ? "images/folder_hover.png" : "images/folder.png"}
        alt={"folder"}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      />
      <span>{props.name}</span>
    </button>
  );
}
