import type { Metadata } from "next";
import "./globals.css";

import { GeistSans } from "geist/font/sans";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "Steven Sikorski",
  description: "Undergraduate student in Computer Science, seeking opportunities in Software Engineering.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${GeistSans.className} bg-white text-gray-950 relative h-full`}>
        <div className="bg-[#d6e3f9] absolute top-[-6rem] -z-10 right-[-4rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[7rem] sm:w-[68.75rem]"></div>
        <div className="bg-[#d1dffc] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[7rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
        <Header />
        {children}
      </body>
    </html>
  );
}
