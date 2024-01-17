"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type ExperienceProperties = {
  title: string;
  description: string;
  image: string;
  organization: string;
  date: string;
};

const ExperienceComponent: React.FC<ExperienceProperties> = ({
  title,
  description,
  image,
  organization,
  date,
}) => {
  return (
    <li className="md:grid md:grid-cols-4">
      <p className="relative flex items-start z-10 mt-5 mb-3 text-sm text-zinc-600">
        {date}
      </p>
      <motion.div
        whileHover={{
          scale: 1.025,
          transition: { duration: 0 },
        }}
        className="relative flex flex-col motion-duration items-start md:col-span-3 bg-white transition-shadow rounded-lg ring-2 ring-zinc-800/5 sm:hover:shadow-lg sm:hover:shadow-zinc-800/5 p-4"
      >
        <div className="flex">
          <Image
            src={`/${image}`}
            alt={title}
            width="48"
            height="48"
            loading="lazy"
            className="rounded-md"
          />
          <div className="flex flex-col ml-3">
            <h2 className="text-base font-semibold tracking-tight text-zinc-800">
              {title}
            </h2>
            <h2 className="text-base tracking-tight text-zinc-700">
              {organization}
            </h2>
          </div>
        </div>
        <p className="relative z-10 mt-2 text-sm text-zinc-600">
          {description}
        </p>
      </motion.div>
    </li>
  );
};

export default ExperienceComponent;
