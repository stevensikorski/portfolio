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
    <main className="mx-auto my-16 sm:my-20 sm:mb-0 max-w-2xl lg:max-w-5xl">
      <div className="mx-auto max-w-2xl lg:max-w-3xl">
        <Brief heading={headingContent} paragraph={paragraphContent} />
      </div>
      <div className="mt-12 mx-6 sm:mx-auto">
        <ul role="list" className="w-full grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <li key={index} className="group relative flex flex-col items-start p-4">
              <div className="z-0 -inset-x-0 -inset-y-0 absolute block bg-white rounded-2xl opacity-1 transition sm:group-hover:opacity-100 sm:group-hover:shadow-lg sm:group-hover:shadow-zinc-800/5"></div>
              <Link href={project.projectURL} target="_blank" rel="noreferrer noopener" className="z-10">
                <Image src={project.image} alt="Profile Picture" width="40" height="40" className="rounded-md" />
                <h2 className="mt-6 text-base font-semibold text-zinc-800">{project.title}</h2>
                <p className="relative mt-2 text-sm text-zinc-600">{project.description}</p>
                <p className="relative mt-6 flex items-center text-sm font-medium text-zinc-400 transition sm:group-hover:text-blue-700">
                  <FaLink />
                  <span className="ml-2">{project.shortenedURL}</span>
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
