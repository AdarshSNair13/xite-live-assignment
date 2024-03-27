"use client";
import { MENUITEMS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <>
      <div className="fixed left-0 top-0 w-full z-10 ease-in duration-300 sm:bg-black">
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
          </ul>
          <Link href="/" className="hidden sm:flex">
            <Image src="/logo2.png" width={100} height={100} alt="Logo" />
          </Link>

          {/* Mobile Button */}
          <div onClick={handleNav} className="block sm:hidden z-10">
            {nav ? (
              <AiOutlineClose size={40} style={{ color: "white" }} />
            ) : (
              <AiOutlineMenu size={40} style={{ color: "white" }} />
            )}
          </div>
          {/* Mobile Menu */}
          <div
            className={
              nav
                ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-gradient-to-r from-red-800 to-red-900 text-center ease-in duration-300"
                : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-gradient-to-r from-red-800 to-red-900 text-center ease-in duration-300"
            }
          >
            <ul>
              <li
                onClick={handleNav}
                className="p-4 text-4xl hover:text-red-500"
              >
                <Link href="/">The Story</Link>
              </li>
              <li
                onClick={handleNav}
                className="p-4 text-4xl hover:text-red-500"
              >
                <Link href="/">Flavours</Link>
              </li>
              <li
                onClick={handleNav}
                className="p-4 text-4xl hover:text-red-500"
              >
                <Link href="/">Upcomming</Link>
              </li>
              <li
                onClick={handleNav}
                className="p-4 text-4xl hover:text-red-500"
              >
                <Link href="/">On Demand</Link>
              </li>
              <li
                onClick={handleNav}
                className="p-4 text-4xl hover:text-red-500"
              >
                <Link href="/">FAQs</Link>
              </li>
              <li
                onClick={handleNav}
                className="p-4 text-4xl hover:text-red-500"
              >
                <Link href="/">Contact Us</Link>
              </li>
              <li
                onClick={handleNav}
                className="px-24"
              >
                <Link href="/">
                  <Image src="/logo2.png" width={200} height={100} alt="Logo" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
