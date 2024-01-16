"use client";

import { motion } from "framer-motion";

import Brief from "@/components/brief";
import Project from "@/components/project";
import { projects } from "@/lib/data";

export default function ProjectsPage() {
  return (
    <motion.main
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0, transition: { duration: 0 } }}
      className="mx-auto my-16 sm:my-20 sm:mb-0 max-w-2xl lg:max-w-5xl motion-duration"
    >
      <div className="mx-auto max-w-2xl lg:max-w-3xl">
        <Brief
          heading={
            <>
              Portfolio showcasing the{" "}
              <span className="text-blue-700">projects</span> that I&apos;ve
              worked on!
            </>
          }
          paragraph={
            <>
              Here is a compilation of my technical knowledge, where I&apos;ve
              developed and refined my skills through various projects spanning
              a wide range of tech stacks.{" "}
            </>
          }
        />
      </div>
      <div className="mt-12 mx-6 sm:mx-auto">
        <ul
          role="list"
          className="w-full grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project, index) => (
            <Project
              key={index}
              name={project.name}
              description={project.description}
              image={project.image}
              url={project.url}
              link={project.link}
            />
          ))}
        </ul>
      </div>
    </motion.main>
  );
}
