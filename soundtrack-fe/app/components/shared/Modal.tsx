interface ModalProps {
  size: "sm" | "md" | "lg";
  title: string;
  children: React.ReactNode;
}

const Modal = ({ size, title, children }: ModalProps) => {
  const sm = "md:w-[200px] md:h-[150px]";
  const md = "md:w-[400px] md:h-[300px]";
  const lg = "md:w-[600px] md:h-[450px]";
  const sizeClass = size === "sm" ? sm : size === "md" ? md : lg;

  <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-full h-screen ${sizeClass} flex flex-col`}>
    <div className="w-full flex flex-row justify-between">
      <h1>{title}</h1>
      <span>x</span>
    </div>
    {children}
  </div>;
};

export default Modal;
