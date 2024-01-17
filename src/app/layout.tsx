import type { Metadata } from "next";
import "./globals.css";

import { GeistSans } from "geist/font/sans";
import BackgroundComponent from "@/components/background";
import HeaderComponent from "@/components/header";

export const metadata: Metadata = {
  title: "Steven Sikorski",
  description:
    "Undergraduate student in Computer Science, seeking opportunities in Software Engineering.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${GeistSans.className} bg-white overflow-x-hidden`}>
        <BackgroundComponent />
        <HeaderComponent />
        {children}
      </body>
    </html>
  );
}
