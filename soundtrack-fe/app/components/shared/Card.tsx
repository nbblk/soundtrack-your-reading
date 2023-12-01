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
    <div className={`w-full md:w-[200px] h-[150px] ${sizeClass} border border-black`}>
      <h1>{title}</h1>
      {children}
    </div>
  );
}
