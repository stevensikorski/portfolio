"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

import BriefComponent from "@/components/brief";
import ButtonComponent from "@/components/button";
import { socials } from "@/lib/data";

export default function AboutPage() {
  return (
    <motion.main
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0, transition: { duration: 0 } }}
      className="mx-auto my-16 sm:my-48 mb-16 sm:mb-0 max-w-2xl lg:max-w-3xl motion-duration"
    >
      <BriefComponent
        heading={
          <>
            Hi, my name is{" "}
            <span className="text-blue-700">Steven Sikorski</span>.{" "}
            <span className="inline-block animate-wave">👋🏻</span>
          </>
        }
        paragraph={
          <>
            I&apos;m currently a junior attending{" "}
            <span className="font-semibold">CUNY Hunter College</span> in{" "}
            <span className="font-semibold">New York City</span>, pursuing a
            Bachelor&apos;s Degree in Computer Science, with a Minor in
            Mathematics. My interests in the field include{" "}
            <span className="font-semibold">software development</span> and{" "}
            <span className="font-semibold">full-stack development</span>. 🎓{" "}
            <br></br>
            <br></br>I bring strong{" "}
            <span className="font-semibold">problem-solving skills</span>,{" "}
            <span className="font-semibold">attention to detail</span>, and a{" "}
            <span className="font-semibold">positive attitude</span> to every
            project. I am eager to connect with professionals, learn from
            experienced mentors, and advance my software engineering career. 💼{" "}
            <br></br>
            <br></br>Some of my <span className="font-semibold">hobbies</span>{" "}
            include motorsports, working out at the gym, and gaming in my free
            time. 🏎️<br></br>
            <br></br>
          </>
        }
      />
      <div className="mx-6 sm:mx-0 h-px bg-zinc-300" />
      <p className="mx-6 sm:mx-0 mt-6 text-base text-zinc-700">
        Feel free to reach out to me with any inquiries or collaboration
        possibilities. I&apos;m eager to meet new people and make connections!
      </p>
      <div className="flex justify-evenly sm:justify-start mx-6 sm:mx-0 gap-0 sm:gap-4 mt-6">
        <ButtonComponent
          href={socials.linkedin}
          icon={<FaLinkedinIn className="h-4 w-4" />}
          text="LinkedIn"
        ></ButtonComponent>
        <ButtonComponent
          href={socials.github}
          icon={<FaGithub className="h-5 w-5" />}
          text="GitHub"
        ></ButtonComponent>
      </div>
    </motion.main>
  );
}
