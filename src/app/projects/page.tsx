import Brief from '@/components/brief';

export default function Projects() {
  const headingContent = (
    <>
      Portfolio showcasing the <span className="text-blue-700">projects</span> that I&apos;ve worked on!
    </>
  );
  const paragraphContent = <>The project page.</>;

  return (
    <main className="mx-auto mt-16 sm:mt-32 max-w-2xl lg:max-w-3xl">
      <Brief heading={headingContent} paragraph={paragraphContent} />
    </main>
  );
}
