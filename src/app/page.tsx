"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaFilePdf } from "react-icons/fa6";
import { TbMessageCircle2Filled } from "react-icons/tb";

import Brief from "@/components/brief";
import Button from "@/components/button";

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0, transition: { duration: 0.25 } }}
      className="mx-auto my-16 sm:my-48 max-w-2xl lg:max-w-3xl"
    >
      <div className="w-[60px] mx-6 sm:mx-0">
        <Image
          src="/profile.jpg"
          alt="Profile Picture"
          width="60"
          height="60"
          className="rounded-full shadow-lg shadow-zinc-800/5 ring-2 ring-zinc-800/5"
        />
      </div>
      <br />
      <Brief
        heading={
          <>
            <span className="text-blue-700">Steven Sikorski</span>
          </>
        }
        paragraph={
          <>
            <span className="font-semibold">
              Computer Science Undergraduate at CUNY Hunter College
            </span>
            <br />
            <br />
            Welcome to my portfolio website, I guess you&apos;re here to learn a
            thing or two about me! I&apos;m a passionate computer science
            student looking to make it big in software engineering in the near
            future.
          </>
        }
      />
      <br />
      <div className="flex justify-evenly sm:justify-start mx-6 sm:mx-0 gap-0 sm:gap-4">
        <Button
          href="https://stevensikorski.com/Steven_Sikorski_Resume.pdf"
          icon={<FaFilePdf className="h-4 w-4" />}
          text="Resume"
        ></Button>
        <Button
          href="/contact"
          icon={<TbMessageCircle2Filled className="h-5 w-5" />}
          text="Contact"
        ></Button>
      </div>
    </motion.main>
  );
}
