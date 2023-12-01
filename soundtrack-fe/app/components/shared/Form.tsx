interface FormProps {
  size: "sm" | "md" | "lg";
  children: React.ReactNode;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function Form({ size, children, onSubmit }: FormProps) {
  const sm = "md:w-[200px] md:h-[150px]";
  const md = "md:w-[400px] md:h-[300px]";
  const lg = "md:w-[600px] md:h-[450px]";
  const sizeClass = size === "sm" ? sm : size === "md" ? md : lg;

  return (
    <form
      className={`w-full ${sizeClass} border border-black`}
      onSubmit={onSubmit}
    >
      {children}
    </form>
  );
}
