import Brief from "@/components/brief";

export default function Blog() {
  const headingContent = (
    <>
      My <span className="text-blue-700">insights</span> as a Computer Science Undergraduate
    </>
  );
  const paragraphContent = <>The blog page.</>;

  return (
    <main className="mx-auto mt-16 sm:mt-32 max-w-2xl lg:max-w-4xl xl:max-w-5xl">
      <Brief heading={headingContent} paragraph={paragraphContent} />
    </main>
  );
}
