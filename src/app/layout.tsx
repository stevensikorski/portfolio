import type { Metadata } from "next";
import "./globals.css";

import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import Header from "@/components/header";

export const metadata: Metadata = {
  title: "Steven Sikorski",
  description: "Undergraduate student in Computer Science, seeking opportunities in Software Engineering.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${GeistSans.className} bg-white text-gray-950 relative h-full`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
