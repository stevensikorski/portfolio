"use client";

import Brief from "@/components/brief";
import Link from "next/link";
import { FaPaperPlane } from "react-icons/fa";
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";
import { sendEmail } from "@/email/email";
import { useRouter } from "next/navigation";

export default function Contact() {
  const router = useRouter();
  const headingContent = (
    <>
      Feel free to <span className="text-blue-700">contact</span> me.
    </>
  );
  const paragraphContent = (
    <>
      Please contact me directly at&nbsp;
      <Link className="underline" href="mailto:contact@stevensikorski.com">
        contact@stevensikorski.com
      </Link>
      &nbsp;or through this form.
    </>
  );

  const [captcha, setCaptcha] = useState<string | null>();

  const onSubmit = async (formData: FormData) => {
    if (!captcha) {
      console.error("reCAPTCHA was not verified.");
      return;
    }

    formData.append("captcha", captcha);
    await sendEmail(formData);
    router.push("/");
  };

  return (
    <main className="mx-auto my-16 sm:my-20 max-w-2xl lg:max-w-3xl">
      <Brief heading={headingContent} paragraph={paragraphContent} />

      <form
        action={async (formData: FormData) => {
          await onSubmit(formData);
        }}
        className="mt-6 mx-6 sm:mx-auto flex flex-col gap-2">
        <p className="font-semibold text-zinc-600">
          Full Name<span className="text-red-400">*</span>
        </p>
        <div className="flex flex-col sm:flex-row gap-2">
          <input name="firstName" type="name" required maxLength={20} placeholder="First name" className="w-full sm:w-1/2 h-12 text-sm px-4 rounded-lg shadow-lg shadow-zinc-800/5 ring-2 ring-zinc-800/5 focus:outline-none"></input>
          <input name="lastName" type="name" required maxLength={20} placeholder="Last name" className="w-full sm:w-1/2 h-12 text-sm px-4 rounded-lg shadow-lg shadow-zinc-800/5 ring-2 ring-zinc-800/5 focus:outline-none"></input>
        </div>
        <p className="font-semibold text-zinc-600 mt-2">
          Email Address<span className="text-red-400">*</span>
        </p>
        <input name="email" type="email" required maxLength={100} placeholder="Email address" className="h-12 text-sm px-4 rounded-lg shadow-lg shadow-zinc-800/5 ring-2 ring-zinc-800/5 focus:outline-none"></input>
        <p className="font-semibold text-zinc-600 mt-2">
          Message<span className="text-red-400">*</span>
        </p>
        <textarea name="message" required maxLength={5000} placeholder="Your message" className="h-48 text-sm rounded-lg p-4 shadow-lg shadow-zinc-800/5 ring-2 ring-zinc-800/5 focus:outline-none"></textarea>
        <ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!} onChange={setCaptcha} className="py-4" />
        <button className="h-9 w-28 sm:mx-0 flex justify-between items-center rounded-full bg-blue-700 px-4 text-sm font-medium transition duration-[250ms] text-white shadow-lg shadow-zinc-800/5 ring-2 ring-zinc-800/5 sm:hover:bg-white/90 sm:hover:text-blue-700">
          <FaPaperPlane className="h-4 w-4" />
          <p>Submit</p>
        </button>
      </form>
    </main>
  );
}
