import Brief from "@/components/brief";
import Link from "next/link";
import { socials } from "@/lib/data";

import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

export default function About() {
  const headingContent = (
    <>
      Hi, my name is <span className="text-blue-700">Steven Sikorski</span>. <span className="inline-block animate-wave">👋</span>
    </>
  );
  const paragraphContent = (
    <>
      I&apos;m currently a junior attending <span className="font-semibold">CUNY Hunter College</span> in <span className="font-semibold">New York City</span>. I&apos;m pursuing a Bachelor&apos;s Degree in Computer Science, with a Minor in Mathematics. My interests in the field includes <span className="font-semibold">software development</span> and <span className="font-semibold">full-stack development</span>. 🎓 <br></br>
      <br></br>I bring strong <span className="font-semibold">problem-solving skills</span>, <span className="font-semibold">attention to detail</span>, and a <span className="font-semibold">positive attitude</span> to every project. I am eager to connect with professionals, learn from experienced mentors, and advance my software engineering career. 💼 <br></br>
      <br></br>Some of my <span className="font-semibold">hobbies</span> include motorsports, working out at the gym, and gaming in my free time. 🏎️<br></br>
      <br></br>
    </>
  );

  return (
    <main className="mx-auto my-16 sm:my-48 mb-16 sm:mb-0 max-w-2xl lg:max-w-3xl">
      <Brief heading={headingContent} paragraph={paragraphContent} />
      <div className="mx-6 sm:mx-0 h-px bg-zinc-300" />
      <p className="mx-6 sm:mx-0 mt-6 text-base text-zinc-600">Feel free to reach out to me with any inquiries or collaboration possibilities. I&apos;m eager to meet new people and make connections!</p>
      <div className="flex justify-evenly sm:justify-start mx-6 sm:mx-0 gap-0 sm:gap-4 mt-6">
        <Link href={"https://www.linkedin.com/in/stevensikorski/"} target="_blank" rel="noopener noreferrer">
          <button className="h-9 w-28 sm:mx-0 flex justify-between items-center rounded-full bg-blue-700 px-4 text-sm font-medium transition duration-[250ms] text-white shadow-lg shadow-zinc-800/5 ring-2 ring-zinc-800/5 sm:hover:bg-white/90 sm:hover:text-blue-700">
            <FaLinkedinIn className="h-4 w-4" />
            <p>LinkedIn</p>
          </button>
        </Link>
        <Link href={"https://github.com/stevensikorski"} target="_blank" rel="noopener noreferrer">
          <button className="h-9 w-28 sm:mx-0 flex justify-between items-center rounded-full bg-blue-700 px-5 text-sm font-medium transition duration-[250ms] text-white shadow-lg shadow-zinc-800/5 ring-2 ring-zinc-800/5 sm:hover:bg-white/90 sm:hover:text-blue-700">
            <FaGithub className="h-4 w-4" />
            <p>GitHub</p>
          </button>
        </Link>
      </div>
    </main>
  );
}
