"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import ReCAPTCHA from "react-google-recaptcha";
import { FaPaperPlane } from "react-icons/fa";

import Brief from "@/components/brief";
import { sendEmail } from "@/email/email";

export default function ContactPage() {
  const router = useRouter();
  const [captcha, setCaptcha] = useState<string | null>();

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    if (!captcha) {
      console.error("reCAPTCHA was not verified.");
      return;
    }

    formData.append("captcha", captcha);
    await sendEmail(formData);
    router.push("/");
  };

  return (
    <motion.main
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0, transition: { duration: 0 } }}
      className="mx-auto my-16 sm:my-20 max-w-2xl lg:max-w-3xl motion-duration"
    >
      <Brief
        heading={
          <>
            Feel free to <span className="text-blue-700">contact</span> me.
          </>
        }
        paragraph={
          <>
            Please contact me directly at&nbsp;
            <Link
              className="underline"
              href="mailto:contact@stevensikorski.com"
            >
              contact@stevensikorski.com
            </Link>
            &nbsp;or through this form. <br></br>
            <br></br>
          </>
        }
      />

      <form onSubmit={onSubmit} className="mx-6 sm:mx-auto flex flex-col gap-2">
        <p className="font-semibold text-sm text-zinc-600">
          Full Name <span className="text-red-400">*</span>
        </p>
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            name="firstName"
            type="name"
            required
            maxLength={20}
            placeholder="Your first name"
            className="w-full sm:w-1/2 h-10 text-sm px-4 rounded-lg ring-2 ring-zinc-800/5 focus:outline-none"
          ></input>
          <input
            name="lastName"
            type="name"
            required
            maxLength={20}
            placeholder="Your last name"
            className="w-full sm:w-1/2 h-10 text-sm px-4 rounded-lg ring-2 ring-zinc-800/5 focus:outline-none"
          ></input>
        </div>
        <p className="font-semibold text-sm text-zinc-600">
          Email Address <span className="text-red-400">*</span>
        </p>
        <input
          name="email"
          type="email"
          required
          maxLength={100}
          placeholder="Your email address"
          className="h-10 text-sm px-4 rounded-lg ring-2 ring-zinc-800/5 focus:outline-none"
        ></input>
        <p className="font-semibold text-sm text-zinc-600">
          Subject <span className="text-red-400">*</span>
        </p>
        <input
          name="subject"
          type="text"
          required
          maxLength={100}
          placeholder="Your subject"
          className="h-10 text-sm px-4 rounded-lg ring-2 ring-zinc-800/5 focus:outline-none"
        ></input>
        <p className="font-semibold text-sm text-zinc-600">
          Message <span className="text-red-400">*</span>
        </p>
        <textarea
          name="message"
          required
          maxLength={5000}
          placeholder="Your message"
          className="h-48 text-sm rounded-lg p-4 ring-2 ring-zinc-800/5 focus:outline-none"
        ></textarea>
        <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
          onChange={setCaptcha}
          className="py-2"
        />
        <motion.div
          whileHover={{
            scale: 1.05,
            rotate: [0, -1, 0, 1, 0],
            transition: { duration: 0.25 },
          }}
          className="h-9 w-28"
        >
          <button
            type="submit"
            className="h-9 w-28 flex justify-center items-center gap-2 rounded-full bg-blue-700 text-sm font-medium transition motion-duration text-white sm:hover:shadow-lg sm:hover:shadow-zinc-800/5 ring-2 ring-zinc-800/5 sm:hover:bg-white/90 sm:hover:text-blue-700"
          >
            <FaPaperPlane className="h-4 w-4" />
            <p>Submit</p>
          </button>
        </motion.div>
      </form>
    </motion.main>
  );
}
