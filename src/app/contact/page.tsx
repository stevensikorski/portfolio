import Brief from "@/components/brief";
import Link from "next/link";
import { socials } from "@/lib/data";

import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

export default function Contact() {
  const headingContent = (
    <>
      Let&apos;s stay in <span className="text-blue-700">contact</span> with each other.
    </>
  );
  const paragraphContent = <>Feel free to reach out to me with any inquiries or collaboration possibilities. I&apos;m eager to connect and explore opportunities.</>;

  return (
    <main className="mx-auto mt-16 sm:mt-32 max-w-2xl lg:max-w-4xl xl:max-w-5xl">
      <Brief heading={headingContent} paragraph={paragraphContent} />
      <div className="mt-6 flex gap-6 mx-6 sm:mx-0">
        <Link href={socials.linkedin} target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="h-7 w-7 justify-between items-center text-[#0A66C2]" />
        </Link>
        <Link href={socials.github} target="_blank" rel="noopener noreferrer">
          <FaGithub className="h-7 w-7 justify-between items-center text-black" />
        </Link>
      </div>
    </main>
  );
}
