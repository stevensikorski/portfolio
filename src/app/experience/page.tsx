import Brief from '@/components/brief';

export default function Experience() {
  const headingContent = (
    <>
      Highlighting the impactful <span className="text-blue-700">teams</span> I&apos;ve been part of.
    </>
  );
  const paragraphContent = <>The experience page.</>;

  return (
    <main className="mx-auto mt-16 sm:mt-32 max-w-2xl lg:max-w-3xl">
      <Brief heading={headingContent} paragraph={paragraphContent} />
    </main>
  );
}
