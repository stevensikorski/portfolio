"use client";

import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { MdMenu, MdClose } from "react-icons/md";

import { links } from "@/lib/data";

export default function HeaderComponent() {
  const path = usePathname().substring(1) || "home";

  const [mobileHeader, setMobileHeader] = useState(false);

  const toggleMobile = () => {
    setMobileHeader(!mobileHeader);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0 } }}
      className="z-50 relative flex motion-duration"
    >
      <div className="h-16 pt-6 w-full flex justify-between items-center mx-6 sm:mx-auto max-w-2xl lg:max-w-3xl">
        <div className="w-10">
          <Link
            href={links[0].hash}
            className={clsx("", { hidden: path === "home" })}
          >
            <Image
              src="/profile.jpg"
              alt="Profile Picture"
              width="40"
              height="40"
              loading="lazy"
              className="rounded-full shadow-lg shadow-zinc-800/5 ring-2 ring-zinc-800/5"
            />
          </Link>
        </div>

        <ul className="hidden sm:flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-2 ring-zinc-800/5">
          {links
            .slice(1)
            .filter(link => link.hidden === false)
            .map(link => (
              <li key={link.hash}>
                <Link
                  href={link.hash}
                  className={clsx("relative block px-3 py-2 transition", {
                    "text-blue-700": path === link.name,
                    "hover:text-blue-700": path !== link.name,
                  })}
                >
                  <p className="capitalize">{link.name}</p>
                  <motion.span
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{
                      opacity: path === link.name ? 1 : 0,
                      scaleX: path === link.name ? 1 : 0,
                      transition: { duration: 0 },
                    }}
                    className="absolute inset-x-1 -bottom-[2px] h-[2px] motion-duration bg-gradient-to-r from-blue-700/0 via-blue-700/75 to-blue-700/0"
                  ></motion.span>
                </Link>
              </li>
            ))}
        </ul>

        <div className="w-10">
          <nav
            className={clsx("fixed inset-0 w-full sm:hidden", {
              "pointer-events-none": mobileHeader === false,
            })}
          >
            <motion.div
              className="w-full h-full motion-duration"
              animate={{ x: mobileHeader ? 0 : "100%" }}
              initial={{ x: mobileHeader ? 0 : "100%" }}
              transition={{ duration: 0 }}
            >
              <div className="absolute inset-0 right-0 h-[200%] bg-white border-l-2 border-zinc-800/5">
                <div className="w-full h-16 bg-white"></div>
              </div>
              <ul className="absolute grid w-full px-10 py-16">
                {links
                  .filter(link => link.hidden === false)
                  .map((link, index) => (
                    <li
                      key={link.hash}
                      className={clsx("border-gray-300 py-6", {
                        "border-b": index < 5,
                      })}
                    >
                      <Link
                        href={link.hash}
                        onClick={() => setMobileHeader(false)}
                        className={clsx(
                          "flex w-full text-xl font-semibold transition",
                          {
                            "text-blue-700": path === link.name,
                            "text-zinc-800": path !== link.name,
                          },
                        )}
                      >
                        <p className="capitalize">{link.name}</p>
                      </Link>
                    </li>
                  ))}
              </ul>
            </motion.div>
            <button
              id="headerButton"
              onClick={toggleMobile}
              className="absolute top-6 right-6 p-1 pointer-events-auto sm:hidden"
            >
              <MdMenu
                className={clsx(
                  "h-8 w-8 justify-between items-center text-zinc-800",
                  {
                    hidden: mobileHeader === true,
                    flex: mobileHeader === false,
                  },
                )}
              />
              <MdClose
                className={clsx(
                  "h-8 w-8 justify-between items-center text-zinc-800",
                  {
                    flex: mobileHeader === true,
                    hidden: mobileHeader === false,
                  },
                )}
              />
            </button>
          </nav>
        </div>
      </div>
    </motion.header>
  );
}
