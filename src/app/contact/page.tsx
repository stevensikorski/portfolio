import Brief from '@/components/brief';

export default function Contact() {
  const headingContent = (
    <>
      Let&apos;s stay in <span className="text-blue-700">contact</span> with each other.
    </>
  );
  const paragraphContent = <>Feel free to reach out to me with any inquiries or collaboration possibilities. I&apos;m eager to connect and explore opportunities.</>;

  return (
    <main className="mx-auto mt-16 sm:mt-32 max-w-2xl lg:max-w-3xl">
      <Brief heading={headingContent} paragraph={paragraphContent} />
    </main>
  );
}
