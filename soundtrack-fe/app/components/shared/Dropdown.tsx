import Link from "next/link";
import { ReactNode } from "react";

type DropdownItem = {
    icon?: ReactNode;
    title: string;
    link: string;
}

interface DropdownProps {
  items: DropdownItem[];
}

export default function Dropdown({ items }: DropdownProps) {
  return (
    <ul className="w-full h-auto flex flex-col justify-center items-center border border-black gap-4">
      {items?.map(({icon, title, link}: DropdownItem) => (
        <li
          key={title}
          className="w-full p-1 flex justify-center items-center border border-black"
        >
          {icon && <span>{icon}</span>}
          <Link href={link} />{title}
        </li>
      ))}
    </ul>
  );
}
