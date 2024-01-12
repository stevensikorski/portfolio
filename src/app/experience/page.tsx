import Brief from "@/components/brief";
import { experiences } from "@/lib/data";

export default function Experience() {
  const headingContent = (
    <>
      Highlighting the impactful <span className="text-blue-700">teams</span> I&apos;ve been part of.
    </>
  );
  const paragraphContent = <>Although I am in the early stages of my software engineering career, here are some teams for which I have made a significant impact.</>;

  return (
    <main className="mx-auto my-16 sm:my-20 max-w-2xl lg:max-w-3xl">
      <Brief heading={headingContent} paragraph={paragraphContent} />
      <div className="mt-12 sm:mt-20 mx-6 sm:mx-auto md:border-l md:border-zinc-300 md:pl-6">
        <ul className="flex flex-col space-y-16 max-w-3xl">
          {experiences.map((experience, index) => (
            <li key={index} className="md: grid md:grid-cols-4 md:items-baseline">
              <div className="group relative flex flex-col items-start md:col-span-3">
                <h2 className="text-base font-semibold tracking-tight text-zinc-800">{experience.title}</h2>
                <h2 className="text-base tracking-tight text-zinc-600">
                  {experience.organization} ∙ {experience.location}
                </h2>
                <p className="relative z-10 mt-2 text-sm text-zinc-600">{experience.description}</p>
              </div>
              <p className="relative flex items-center order-first z-10 mb-3 mt-1 text-sm text-zinc-400 md:block">{experience.date}</p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
