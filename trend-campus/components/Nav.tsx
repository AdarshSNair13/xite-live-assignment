"use client";
import { MENUITEMS } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="fixed left-0 top-0 w-full z-10 ease-in duration-300 bg-black">
        <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
          <Link href="/">
            <Image src="/logo1.png" width={100} height={100} alt="Logo" />
          </Link>
          <ul className="hidden sm:flex">
            {MENUITEMS.map((item, index) => (
              <li key={index} className="p-6 hover:text-red-800">
                <Link href={item.href}>{item.text}</Link>
              </li>
            ))}
            <Link href="/" className="p-5">
              <button
                type="button"
                className="inline-block rounded bg-red-800 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
              >
                Contact Us
              </button>
            </Link>
            <Link href="/" className="p-1">
              <Image src="/logo2.png" width={100} height={100} alt="Logo" />
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
