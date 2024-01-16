"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <motion.main
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0, transition: { duration: 0.25 } }}
      className="text-center mx-6 sm:mx-0 my-16 sm:my-20"
    >
      <h1 className="text-3xl sm:text-5xl font-bold text-zinc-800 tracking-tighter">
        There was a <span className="text-blue-700">problem</span>.
      </h1>
      <p className="text-base text-zinc-700 mt-6">
        Please return to the&nbsp;
        <Link href="/" className="text-blue-700 underline">
          homepage
        </Link>
        .
      </p>
    </motion.main>
  );
}
