import Link from 'next/link';
import Image from 'next/image';
import { socials } from '@/lib/data';

import Brief from '@/components/brief';
import { FaFilePdf } from 'react-icons/fa6';
import { TbMessageCircle2Filled } from 'react-icons/tb';

export default function Home() {
  const headingContent = (
    <>
      <span className="text-blue-700">Steven Sikorski</span>
    </>
  );
  const paragraphContent = (
    <>
      <span className="font-semibold">Computer Science Undergraduate at CUNY Hunter College</span>
      <br />
      <br />
      Welcome to my portfolio website, I guess you&apos;re here to learn a thing or two about me! I&apos;m a passionate computer science student looking to make it big in software engineering in the near future.
    </>
  );

  return (
    <main className="mx-auto mt-16 sm:mt-32 max-w-2xl lg:max-w-2xl xl:max-w-5xl">
      <div className="w-[60px] mx-6 sm:mx-0">
        <Image src="/profile.jpg" alt="Profile Picture" width="60" height="60" className="rounded-full shadow-lg shadow-zinc-800/5 ring-2 ring-zinc-800/5" />
      </div>
      <br />
      <Brief heading={headingContent} paragraph={paragraphContent} />
      <br />
      <div className="flex mx-6 sm:mx-0 gap-4">
        <Link href={'/Steven_Sikorski_Resume.pdf'} target="_blank" rel="noopener noreferrer">
          <button className="h-9 w-28 sm:mx-0 flex justify-between items-center rounded-full bg-white/90 pl-4 pr-4 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-2 ring-zinc-800/5">
            <FaFilePdf className="h-4 w-4" />
            <p>Resume</p>
          </button>
        </Link>
        <Link href={'/contact'}>
          <button className="h-9 w-28 sm:mx-0 flex justify-between items-center rounded-full bg-white/90 pl-4 pr-4 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-2 ring-zinc-800/5">
            <TbMessageCircle2Filled className="h-4 w-4" />
            <p>Contact</p>
          </button>
        </Link>
      </div>
    </main>
  );
}
