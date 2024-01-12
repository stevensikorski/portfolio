import Brief from "@/components/brief";

export default function Blog() {
  const headingContent = (
    <>
      My <span className="text-blue-700">insights</span> as a Computer Science Undergraduate
    </>
  );
  const paragraphContent = <>The blog page.</>;

  return (
    <main className="mx-auto my-16 sm:my-20 max-w-2xl lg:max-w-3xl">
      <Brief heading={headingContent} paragraph={paragraphContent} />
    </main>
  );
}
