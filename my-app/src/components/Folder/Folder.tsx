export function Folder(props) {
  return (
    <button
      onClick={props.onClick}
      className="flex flex-col items-center justify-center w-20 text-sm text-center hover:opacity-80"
    >
      <img
        src="images/folder.png"
        alt={"folder"}
      />
      <span>{props.name}</span>
    </button>
  );
}
