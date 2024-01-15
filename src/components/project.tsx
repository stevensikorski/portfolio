import React from "react";
import { motion } from "framer-motion";
import { FaLink } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

type ProjectProperties = {
  name: string;
  description: string;
  image: string;
  url: string;
  link: string;
};

const Project: React.FC<ProjectProperties> = ({ name, description, image, url, link }) => {
  return (
    <motion.li whileHover={{ scale: 1.05, rotate: [0, -1, 0, 1, 0], transition: { duration: 0.25 } }} className="group relative flex flex-col items-start p-4">
      <div className="z-0 -inset-x-0 -inset-y-0 absolute block bg-white rounded-2xl opacity-1 transition duration-[250] sm:group-hover:opacity-100 ring-2 ring-zinc-800/5 sm:group-hover:shadow-lg sm:group-hover:shadow-zinc-800/5"></div>
      <Link href={url} target="_blank" rel="noreferrer noopener" className="z-10">
        <Image src={`/${image}`} alt="Profile Picture" width="40" height="40" className="rounded-md" />
        <h2 className="mt-6 text-base font-semibold text-zinc-800">{name}</h2>
        <p className="relative mt-2 text-sm text-zinc-700">{description}</p>
        <p className="relative mt-6 flex items-center text-sm font-medium text-zinc-400 transition duration-[250] sm:group-hover:text-blue-700">
          <FaLink className="w-4 h-4" />
          <span className="ml-2">{link}</span>
        </p>
      </Link>
    </motion.li>
  );
};

export default Project;
