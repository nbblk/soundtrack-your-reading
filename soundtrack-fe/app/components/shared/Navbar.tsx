"use client";
import Link from "next/link";
import Image from "next/image";
import Searchbar from "./Searchbar";
import Button from "./Button";
import useAuth from "@/app/lib/hooks/useAuth";

export default function Navbar() {
  const { login, signup } = useAuth();

  return (
    <nav className="sticky top-0 w-full h-auto md:h-[80px] m-0 p-4 z-50 border border-t-0 border-x-0 border-black bg-white">
      <ul className="w-full h-full flex flex-col md:flex-row justify-center md:justify-between items-center gap-8">
        <li className="w-full md:w-1/3 flex flex-col md:flex-row items-center gap-4">
          <Link
            href="/"
            className="h-auto p-4 flex justify-start items-center "
          >
            <Image
              src="/images/logo.jpg"
              alt="soundtrack-your-reading"
              width="60"
              height="0"
              className="aspect-ratio w-auto h-max-[80px]"
              priority={true}
            />
          </Link>
          <Searchbar />
        </li>
        <ul className="md:w-1/5 w-full flex flex-col md:flex-row justify-center md:justify-end items-center md:items-end gap-4">
          <Button type="button" size="md" value="Login" onClick={login} styles="hover:text-white"/>
          <Button type="button" size="md" value="Signup" onClick={signup} styles="hover:text-white"/>
        </ul>
      </ul>
    </nav>
  );
}
