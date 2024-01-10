import Brief from "@/components/brief";
import Link from "next/link";
import Image from "next/image";
import { FaLink } from "react-icons/fa6";
import { projects } from "@/lib/data";

export default function Projects() {
  const headingContent = (
    <>
      Portfolio showcasing the <span className="text-blue-700">projects</span> that I&apos;ve worked on!
    </>
  );
  const paragraphContent = <>Here is a compilation of my technical knowledge, where I&apos;ve developed and refined my skills through various projects spanning a wide range of tech stacks. </>;

  return (
    <main className="mx-auto mt-16 sm:mt-32 mb-16 sm:mb-0 max-w-2xl lg:max-w-5xl">
      <div className="mx-auto max-w-2xl lg:max-w-3xl">
        <Brief heading={headingContent} paragraph={paragraphContent} />
      </div>
      <div className="mt-16 mx-6 sm:mx-0">
        <ul role="list" className="w-full grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <li key={index} className="group relative flex flex-col items-start bg-white p-4 rounded-2xl ">
              <Link href={project.projectURL} target="_blank" rel="noreferrer noopener">
                <Image src={project.image} alt="Profile Picture" width="40" height="40" className="z-10 rounded-md" />
                <h2 className="mt-6 text-base font-semibold text-zinc-800">{project.title}</h2>
                <p className="relative z-10 mt-2 text-sm text-zinc-600">{project.description}</p>
                <p className="relative z-10 mt-6 flex items-center text-sm font-medium text-zinc-400 transition group-hover:text-blue-700">
                  <FaLink />
                  <span className="ml-2">{project.shortenedURL}</span>
                </p>
              </Link>
            </li>
          ))}

          {/* <li className="group relative flex flex-col items-start bg-white p-4 rounded-2xl">
            <Link href="https://www.google.com" target="_blank" rel="noreferrer noopener">
              <Image src="/profile.jpg" alt="Profile Picture" width="40" height="40" className="z-10 rounded-full shadow-lg shadow-zinc-800/5 ring-2 ring-zinc-800/5" />
              <h2 className="mt-6 text-base font-semibold text-zinc-800">My project!</h2>
              <p className="relative z-10 mt-2 text-sm text-zinc-600">Link management for modern marketing teams. 6K stars on GitHub, 5.2K users.</p>
              <p className="relative z-10 mt-6 flex items-center text-sm font-medium text-zinc-400 transition group-hover:text-blue-700">
                <FaLink />
                <span className="ml-2">github.com</span>
              </p>
            </Link>
          </li> */}
        </ul>
      </div>
    </main>
  );
}
