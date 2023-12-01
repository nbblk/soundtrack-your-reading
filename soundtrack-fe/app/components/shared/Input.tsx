interface InputProps {
  size: "sm" | "md" | "lg";
  label: string;
  type: "text" | "password" | "email" | "number" | "date"; 
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyUp: (e: React.KeyboardEvent<HTMLInputElement>) => void | null;
}

export default function Input({ size, label, type, placeholder, onChange, onKeyUp }: InputProps) {
  const sm = "md:w-1/5";
  const md = "md:w-1/2";
  const lg = "md:w-2/3";
  const widthClass = size === "sm" ? sm : size === "md" ? md : lg;

  return (
    <div className={`w-full ${widthClass} border border-black outline-black p-1`}>
      <label className="hidden">{label}</label>
      <input type={type} placeholder={placeholder} onChange={onChange} onKeyUp={onKeyUp ?? null}/>
    </div>
  );
}