interface CardProps {
  size: "sm" | "md" | "lg";
  title: string;
  children: React.ReactNode;
}

export default function Card({ size, title, children }: CardProps) {
  const sm = "md:w-[200px] md:h-[150px]";
  const md = "md:w-[400px] md:h-[300px]";
  const lg = "md:w-[600px] md:h-[450px]";
  const sizeClass = size === "sm" ? sm : size === "md" ? md : lg;

  return (
    <li
      className={`w-full md:w-[200px] h-[150px] p-4 ${sizeClass} flex flex-col justify-between items-start border border-black hover:cursor-pointer hover:shadow-[10px_10px_0px_1px_rgba(0,0,0,1)]`}
    >
      <h1 className="text-2xl">{title}</h1>
      {children}
    </li>
  );
}
