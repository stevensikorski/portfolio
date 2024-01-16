"use client";

import { motion } from "framer-motion";

import Brief from "@/components/brief";
import Experience from "@/components/experience";
import { experiences } from "@/lib/data";

export default function ExperiencePage() {
  return (
    <motion.main
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0, transition: { duration: 0.25 } }}
      className="mx-auto my-16 sm:my-20 max-w-2xl lg:max-w-3xl"
    >
      <Brief
        heading={
          <>
            Highlighting the impactful{" "}
            <span className="text-blue-700">teams</span> I&apos;ve been part of.
          </>
        }
        paragraph={
          <>
            Although I am in the early stages of my software engineering career,
            here are some teams for which I have made a significant impact.
          </>
        }
      />
      <div className="mt-12 sm:mt-20 mx-6 sm:mx-auto md:border-l md:border-zinc-300 md:pl-6">
        <ul className="flex flex-col space-y-16 max-w-3xl">
          {experiences.map((experience, index) => (
            <Experience
              key={index}
              title={experience.title}
              description={experience.description}
              organization={experience.organization}
              location={experience.location}
              date={experience.date}
            />
          ))}
        </ul>
      </div>
    </motion.main>
  );
}
