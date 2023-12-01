interface ButtonProps {
  size: "sm" | "md" | "lg";
  value: string;
}

export default function Button({ size, value }: ButtonProps) {
  const sm = "md:w-1/5";
  const md = "md:w-1/2";
  const lg = "md:w-2/3";
  const widthClass = size === "sm" ? sm : size === "md" ? md : lg;

  return (
    <button
      className={`w-full ${widthClass} h-[80px] p-1 border border-black hover:bg-black hover:white`}
    >
      {value}
    </button>
  );
}
