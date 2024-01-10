import Brief from '@/components/brief';

export default function About() {
  const headingContent = (
    <>
      Hey, my name is <span className="text-blue-700">Steven Sikorski</span>. <span className="inline-block animate-wave">👋</span>
    </>
  );
  const paragraphContent = (
    <>
      I&apos;m a junior currently attending <span className="font-semibold">CUNY Hunter College</span>. I&apos;m pursuing a Bachelor&apos;s Degree in Computer Science, with a Minor in Mathematics. My interests in the field is <span className="font-semibold">software development</span> and <span className="font-semibold">full-stack development</span>. 🎓
      <br />
      <br /> I bring strong <span className="font-semibold">problem-solving skills</span>, <span className="font-semibold">attention to detail</span>, and a <span className="font-semibold">positive attitude</span> to every project. Excited to connect with professionals, learn from experienced mentors, and take the next step in my software engineering career. 💼
      <br />
      <br /> Some of my favorite hobbies are: motorsports, gym, and gaming. 🏎️
    </>
  );

  return (
    <main className="mx-auto mt-16 sm:mt-32 max-w-2xl lg:max-w-4xl xl:max-w-5xl">
      <Brief heading={headingContent} paragraph={paragraphContent} />
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
