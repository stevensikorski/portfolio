import Brief from "@/components/brief";
import Link from "next/link";
import { socials } from "@/lib/data";

import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

export default function About() {
  const headingContent = (
    <>
      Hey, my name is <span className="text-blue-700">Steven Sikorski</span>. <span className="inline-block animate-wave">👋</span>
    </>
  );
  const paragraphContent = (
    <>
      I&apos;m currently a junior attending <span className="font-semibold">CUNY Hunter College</span>. I&apos;m pursuing a Bachelor&apos;s Degree in Computer Science, with a Minor in Mathematics. My interests in the field includes <span className="font-semibold">software development</span> and <span className="font-semibold">full-stack development</span>. 🎓
      <br />
      <br /> I bring strong <span className="font-semibold">problem-solving skills</span>, <span className="font-semibold">attention to detail</span>, and a <span className="font-semibold">positive attitude</span> to every project. I am eager to connect with professionals, learn from experienced mentors, and advance my software engineering career. 💼
      <br />
      <br /> Some of my hobbies include motorsports, working out at the gym, and gaming in my free time. 🏎️
      <br />
      <br />
    </>
  );

  return (
    <main className="mx-auto mt-16 sm:mt-32 mb-16 sm:mb-0 max-w-2xl lg:max-w-3xl">
      <Brief heading={headingContent} paragraph={paragraphContent} />
      <div className="mx-6 sm:mx-0 h-[2px] w-full bg-zinc-800/25" />
      <p className="mx-6 sm:mx-0 mt-6 text-base text-zinc-700">Feel free to reach out to me with any inquiries or collaboration possibilities. I&apos;m eager to connect and explore opportunities!</p>
      {/* <div className="mt-6 flex gap-6 mx-6 sm:mx-0">
        <Link href={socials.linkedin} target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="h-7 w-7 justify-between items-center text-[#0A66C2]" />
        </Link>
        <Link href={socials.github} target="_blank" rel="noopener noreferrer">
          <FaGithub className="h-7 w-7 justify-between items-center text-black" />
        </Link>
      </div> */}
      <div className="flex mx-6 sm:mx-0 gap-4 mt-6">
        <Link href={"/Steven_Sikorski_Resume.pdf"} target="_blank" rel="noopener noreferrer">
          <button className="h-9 w-28 sm:mx-0 flex justify-between items-center rounded-full bg-white/90 px-4 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-2 ring-zinc-800/5 hover:text-blue-700">
            <FaLinkedinIn className="h-4 w-4" />
            <p>LinkedIn</p>
          </button>
        </Link>
        <Link href={"/contact"}>
          <button className="h-9 w-28 sm:mx-0 flex justify-between items-center rounded-full bg-white/90 px-5 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-2 ring-zinc-800/5 hover:text-blue-700">
            <FaGithub className="h-4 w-4" />
            <p>GitHub</p>
          </button>
        </Link>
      </div>
    </main>
  );
}

// export default function About() {
//   return (
//     <main className="mx-auto mt-16 sm:mt-32 max-w-2xl lg:max-w-4xl xl:max-w-5xl">
//       <div className="mx-6 sm:mx-0 max-w-3xl">
//         <h1 className="text-4xl sm:text-5xl font-bold text-zinc-800 tracking-tighter">
//           Hey, my name is <span className="text-blue-700">Steven Sikorski</span>. <span className="inline-block animate-wave">👋</span>
//         </h1>
//         <p className="text-base text-zinc-600 mt-6">
//           I&apos;m a junior currently attending CUNY Hunter College. I&apos;m pursuing a Bachelor&apos;s Degree in Computer Science, with a Minor in Mathematics. My interests in the field is software development and full-stack development. 🎓 <br /> <br />
//           I bring strong problem-solving skills, attention to detail, and a positive attitude to every project. Excited to connect with professionals, learn from experienced mentors, and take the next step in my software engineering career. 💼 <br /> <br />
//           Some of my favorite hobbies are: motorsports, gym, and gaming. 🏎️
//         </p>
//       </div>
//     </main>
//   );
// }
