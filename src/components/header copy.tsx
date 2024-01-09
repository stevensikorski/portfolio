"use client";

import React, { useEffect } from "react";
import { useState } from "react";
import { usePathname } from "next/navigation";

import Image from "next/image";
import Link from "next/link";
import { MdMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";

export default function Header() {
  const path = usePathname().substring(1);

  const [mobileHeader, setMobileHeader] = useState(false);
  const toggleMobile = () => {
    setMobileHeader(!mobileHeader);
  };

  return (
    <header className="z-10 h-16 pt-6 w-full flex justify-between items-center mx-6 sm:mx-auto max-w-2xl lg:max-w-4xl xl:max-w-5xl">
      <div className="w-10">
        <Link href="/">
          <Image src="/profile.jpg" alt="Profile Picture" width="40" height="40" className="rounded-full shadow-lg shadow-zinc-800/5 ring-2 ring-zinc-800/5" />
        </Link>
      </div>

      <ul className="hidden sm:flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-2 ring-zinc-800/5">
        <li>
          <Link href="/about" className={path == "about" ? "relative block px-3 py-2 transition duration-[250ms] text-blue-700" : "relative block px-3 py-2 transition duration-[250ms] hover:text-blue-700"}>
            <p className="capitalize">about</p>
            {/* <span className={path == "about" ? "absolute inset-x-1 -bottom-[2px] h-[2px] bg-blue-700" : "hidden"}></span> */}
          </Link>
        </li>
        <li>
          <Link href="/projects" className={path == "projects" ? "relative block px-3 py-2 transition duration-[250ms] text-blue-700" : "relative block px-3 py-2 transition duration-[250ms] hover:text-blue-700"}>
            <p className="capitalize">projects</p>
            {/* <span className={path == "projects" ? "absolute inset-x-1 -bottom-[2px] h-[2px] bg-blue-700" : "hidden"}></span> */}
          </Link>
        </li>
        <li>
          <Link href="/experience" className={path == "experience" ? "relative block px-3 py-2 transition duration-[250ms] text-blue-700" : "relative block px-3 py-2 transition duration-[250ms] hover:text-blue-700"}>
            <p className="capitalize">experience</p>
            {/* <span className={path == "experience" ? "absolute inset-x-1 -bottom-[2px] h-[2px] bg-blue-700" : "hidden"}></span> */}
          </Link>
        </li>
        <li>
          <Link href="/blog" className={path == "blog" ? "relative block px-3 py-2 transition duration-[250ms] text-blue-700" : "relative block px-3 py-2 transition duration-[250ms] hover:text-blue-700"}>
            <p className="capitalize">blog</p>
            {/* <span className={path == "blog" ? "absolute inset-x-1 -bottom-[2px] h-[2px] bg-blue-700" : "hidden"}></span> */}
          </Link>
        </li>
        <li>
          <Link href="/contact" className={path == "contact" ? "relative block px-3 py-2 transition duration-[250ms] text-blue-700" : "relative block px-3 py-2 transition duration-[250ms] hover:text-blue-700"}>
            <p className="capitalize">contact</p>
            {/* <span className={path == "contact" ? "absolute inset-x-1 -bottom-[2px] h-[2px] bg-blue-700" : "hidden"}></span> */}
          </Link>
        </li>
      </ul>

      <div className="w-10">
        <nav className={mobileHeader ? "fixed inset-0 w-full" : "fixed inset-0 z-50 w-full pointer-events-none"}>
          <div className={mobileHeader ? "w-full h-full translate-x-0 transition-all duration-[250ms]" : "w-full h-full translate-x-full transition-all duration-[250ms]"}>
            <div className="absolute z-20 inset-0 right-0 bg-white ring-4 ring-zinc-800/5 shadow-lg shadow-zinc-800/5">
              <div className="w-full h-16 bg-white"></div>
            </div>
            <ul className="absolute z-20 grid w-full px-10 py-16">
              <li className="border-b border-gray-300 py-6">
                <Link href="/" onClick={() => setMobileHeader(false)} className={path == "" ? "flex w-full text-xl font-semibold transition duration-[250ms] text-blue-700" : "flex w-full text-xl font-semibold transition duration-[250ms] text-zinc-800"}>
                  <p className="capitalize">home</p>
                </Link>
              </li>
              <li className="border-b border-gray-300 py-6">
                <Link href="/about" onClick={() => setMobileHeader(false)} className={path == "about" ? "flex w-full text-xl font-semibold transition duration-[250ms] text-blue-700" : "flex w-full text-xl font-semibold transition duration-[250ms] text-zinc-800"}>
                  <p className="capitalize">about</p>
                </Link>
              </li>
              <li className="border-b border-gray-300 py-6">
                <Link href="/projects" onClick={() => setMobileHeader(false)} className={path == "projects" ? "flex w-full text-xl font-semibold transition duration-[250ms] text-blue-700" : "flex w-full text-xl font-semibold transition duration-[250ms] text-zinc-800"}>
                  <p className="capitalize">projects</p>
                </Link>
              </li>
              <li className="border-b border-gray-300 py-6">
                <Link href="/experience" onClick={() => setMobileHeader(false)} className={path == "experience" ? "flex w-full text-xl font-semibold transition duration-[250ms] text-blue-700" : "flex w-full text-xl font-semibold transition duration-[250ms] text-zinc-800"}>
                  <p className="capitalize">experience</p>
                </Link>
              </li>
              <li className="border-b border-gray-300 py-6">
                <Link href="/blog" onClick={() => setMobileHeader(false)} className={path == "blog" ? "flex w-full text-xl font-semibold transition duration-[250ms] text-blue-700" : "flex w-full text-xl font-semibold transition duration-[250ms] text-zinc-800"}>
                  <p className="capitalize">blog</p>
                </Link>
              </li>
              <li className="py-6">
                <Link href="/contact" onClick={() => setMobileHeader(false)} className={path == "contact" ? "flex w-full text-xl font-semibold transition duration-[250ms] text-blue-700" : "flex w-full text-xl font-semibold transition duration-[250ms] text-zinc-800"}>
                  <p className="capitalize">contact</p>
                </Link>
              </li>
            </ul>
          </div>
          <button id="headerButton" onClick={toggleMobile} className="absolute top-7 right-7 pointer-events-auto sm:hidden">
            <MdMenu className={mobileHeader ? "hidden" : "h-8 w-8 flex justify-between items-center text-zinc-800"} />
            <MdClose className={mobileHeader ? "h-8 w-8 flex justify-between items-center text-zinc-800" : "hidden"} />
          </button>
        </nav>
      </div>
    </header>
  );
}
