"use client";

import React from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import { useState } from "react";
import { usePathname } from "next/navigation";

import Image from "next/image";
import Link from "next/link";
import { MdMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";

export default function Header() {
  const path = usePathname().substring(1) || "home";

  const [mobileHeader, setMobileHeader] = useState(false);
  const toggleMobile = () => {
    setMobileHeader(!mobileHeader);
  };

  return (
    <header className="z-50 relative flex">
      <div className="h-16 pt-6 w-full flex justify-between items-center mx-6 sm:mx-auto max-w-2xl lg:max-w-3xl">
        <div className="w-10">
          <Link href={links[0].hash} className={clsx("", { hidden: path === "home" })}>
            <Image src="/profile.jpg" alt="Profile Picture" width="40" height="40" className="rounded-full shadow-lg shadow-zinc-800/5 ring-2 ring-zinc-800/5" />
          </Link>
        </div>

        <ul className="hidden sm:flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-2 ring-zinc-800/5">
          {links
            .slice(1)
            .filter((link) => link.hidden === false)
            .map((link) => (
              <li key={link.hash}>
                <Link href={link.hash} className={clsx("relative block px-3 py-2 transition duration-[250ms]", { "text-blue-700": path === link.name, "hover:text-blue-700": path !== link.name })}>
                  <p className="capitalize">{link.name}</p>
                  <motion.span initial={{ opacity: 0, scaleX: 0 }} animate={{ opacity: path === link.name ? 1 : 0, scaleX: path === link.name ? 1 : 0 }} className="absolute inset-x-1 -bottom-[2px] h-[2px] bg-gradient-to-r from-blue-700/0 via-blue-700/75 to-blue-700/0"></motion.span>
                </Link>
              </li>
            ))}
        </ul>

        <div className="w-10">
          <nav className={clsx("fixed inset-0 w-full sm:hidden", { "pointer-events-none": mobileHeader === false })}>
            <div className={clsx("w-full h-full duration-[250ms]", { "translate-x-0": mobileHeader === true, "translate-x-full": mobileHeader === false })}>
              <div className="absolute inset-0 right-0 bg-white border-l-2 border-zinc-800/5">
                <div className="w-full h-16 bg-white"></div>
              </div>
              <ul className="absolute grid w-full px-10 py-16">
                {links
                  .filter((link) => link.hidden === false)
                  .map((link, index) => (
                    <li key={link.hash} className={clsx("border-gray-300 py-6", { "border-b": index < 5 })}>
                      <Link href={link.hash} onClick={() => setMobileHeader(false)} className={clsx("flex w-full text-xl font-semibold transition duration-[250ms]", { "text-blue-700": path === link.name, "text-zinc-800": path !== link.name })}>
                        <p className="capitalize">{link.name}</p>
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
            <button id="headerButton" onClick={toggleMobile} className="absolute top-7 right-7 pointer-events-auto sm:hidden">
              <MdMenu className={clsx("h-8 w-8 justify-between items-center text-zinc-800", { hidden: mobileHeader === true, flex: mobileHeader === false })} />
              <MdClose className={clsx("h-8 w-8 justify-between items-center text-zinc-800", { flex: mobileHeader === true, hidden: mobileHeader === false })} />
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
