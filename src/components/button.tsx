"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

type ButtonProperties = {
  href: string;
  icon: React.ReactNode;
  text: string;
};

const Button: React.FC<ButtonProperties> = ({ href, icon, text }) => {
  return (
    <motion.div whileHover={{ scale: 1.05, rotate: [0, -1, 0, 1, 0], transition: { duration: 0.25 } }}>
      <Link href={href} target="_blank" rel="noopener noreferrer">
        <button className="h-9 w-28 sm:mx-0 flex justify-center items-center gap-2 rounded-full bg-blue-700 text-sm font-medium transition duration-[250ms] text-white sm:hover:shadow-lg sm:hover:shadow-zinc-800/5 ring-2 ring-zinc-800/5 sm:hover:bg-white/90 sm:hover:text-blue-700">
          {icon}
          <p>{text}</p>
        </button>
      </Link>
    </motion.div>
  );
};

export default Button;
