"use client";

import { Palindrome } from "./components/Palindrome";

export default function Home() {
  return (
    <main className="min-h-screen items-center justify-center flex px-2 text-gray-700">
      <div className="max-w-full basis-[500px]">
        <h2 className="text-center py-6 uppercase font-bold text-lg">
          Find The Longest Palindrome
        </h2>
        <Palindrome />
      </div>
      <div className="text-gray-300 absolute right-2 bottom-2">
        <a
          href="https://www.dictionary.com/e/palindromic-word"
          target="_blank"
          rel="noopener noreferrer"
        >
          what is palindrome?
        </a>
      </div>
    </main>
  );
}
