import Link from "next/link";
import Image from "next/image";
import Searchbar from "./Searchbar";

export default function Navbar() {
  return (
    <nav className="sticky w-full h-auto md:h-[80px] m-0 p-4 border border-t-0 border-x-0 border-black">
      <ul className="w-full h-full flex flex-col md:flex-row justify-center md:justify-between items-center gap-8">
        <li className="w-full md:w-1/3 flex flex-col md:flex-row items-center gap-4">
          <Link
            href="/"
            className="h-auto p-4 flex justify-start items-center "
          >
            <Image
              src="/images/logo.svg"
              alt="soundtrack-your-reading"
              width="0"
              height="0"
              className="aspect-ratio max-w-[100px] max-w-[100px] w-auto h-auto"
              priority={true}
            />
          </Link>
          <Searchbar />
        </li>
        <ul className="w-auto flex flex-col md:flex-row justify-center md:justify-between items-center md:items-between gap-4">
          <li className="w-full hover:border hover:border-black">
            <Link className="inline-block w-full text-center" href="/login">
              Login
            </Link>
          </li>
          <li className="w-full hover:border hover:border-black">
            <Link className="inline-block w-full text-center" href="/signup">
              Signup
            </Link>
          </li>
        </ul>
      </ul>
    </nav>
  );
}
