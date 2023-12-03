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
    <ul className="absolute top-[30px] md:w-auto w-full h-auto z-10 flex flex-col justify-center items-center border border-black">
      {items?.map(({icon, title, link}: DropdownItem) => (
        <li
          key={title}
          className="w-full p-1 flex justify-center items-center hover:bg-black hover:text-white"
        >
          {icon && <span>{icon}</span>}
          <Link href={link}>{title}</Link>
        </li>
      ))}
    </ul>
  );
}
