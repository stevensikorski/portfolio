"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 w-full text-sm p-4 text-center space-x-2">
      <Link href="https://github.com/stevensikorski" target="_blank" rel="noopener noreferrer">
        GitHub
      </Link>
      <span>·</span>
      <Link href="https://linkedin.com/in/stevensikorski" target="_blank" rel="noopener noreferrer">
        LinkedIn
      </Link>
    </footer>
  );
}
