"use client";

import React from "react";
import { motion } from "framer-motion";

type ExperienceProperties = {
  title: string;
  description: string;
  organization: string;
  location: string;
  date: string;
};

const Experience: React.FC<ExperienceProperties> = ({ title, description, organization, location, date }) => {
  return (
    <li className="md: grid md:grid-cols-4 md:items-baseline">
      <motion.div whileHover={{ scale: 1.025, rotate: [0, -1, 0, 1, 0], transition: { duration: 0.25 } }} className="group relative flex flex-col items-start md:col-span-3 bg-white transition-shadow rounded-lg ring-2 ring-zinc-800/5 sm:hover:shadow-lg sm:hover:shadow-zinc-800/5 p-4">
        <h2 className="text-base font-semibold tracking-tight text-zinc-800">{title}</h2>
        <h2 className="text-base tracking-tight text-zinc-600">
          {organization} ∙ {location}
        </h2>
        <p className="relative z-10 mt-2 text-sm text-zinc-600">{description}</p>
      </motion.div>
      <p className="relative flex items-center order-first z-10 mb-3 mt-1 font-semibold text-sm text-zinc-800 md:block">{date}</p>
    </li>
  );
};

export default Experience;
