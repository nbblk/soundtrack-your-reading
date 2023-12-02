interface ButtonProps {
  type: "button" | "submit";
  size: "sm" | "md" | "lg";
  value: string;
  onClick: () => void;
}

export default function Button({ type, size, value, onClick }: ButtonProps) {
  const sm = "md:w-1/5";
  const md = "md:w-1/2";
  const lg = "md:w-2/3";
  const widthClass = size === "sm" ? sm : size === "md" ? md : lg;

  return (
    <button
      type={type}
      className={`w-full ${widthClass} h-auto p-1 border border-black hover:bg-black hover:text-white`}
      onClick={onClick}
    >
      {value}
    </button>
  );
}
