import type { Metadata } from "next";
import "./globals.css";

import { GeistSans } from "geist/font/sans";
import { Analytics } from "@vercel/analytics/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Steven Sikorski",
  description: "Software Engineer",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/favicon-dark.png",
        href: "/favicon-dark.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/favicon-light.png",
        href: "/favicon-light.png",
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${GeistSans.className} h-screen w-screen overflow-hidden bg-white`}>
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
