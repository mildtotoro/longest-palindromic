"use client";

import { findLongestPalindrome } from "@/utils/palindrome";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
  const [text, setText] = useState("redder");
  const [ans, setAns] = useState("");

  function onFindLongestPalindrome() {
    setAns(findLongestPalindrome(text));
  }
  // const onFindLongestPalindrome = useCallback(
  //   (text) => {
  //     return findLongestPalindrome(text);
  //   },
  //   [text]
  // );

  // useEffect(() => {
  //   onFindLongestPalindrome();
  // }, [text]);

  return (
    <main className="min-h-screen items-center justify-center flex p-24">
      <div className="min-w-full max-w-[500px]">
        <h2 className="text-center py-6 uppercase font-bold text-lg">
          Find The Longest Palindrome
        </h2>

        <textarea
          className="border-solid border border-gray-300 w-full p-3"
          onChange={(e) => setText(e.target.value)}
          value={text}
          rows={4}
        />

        <button
          className="bg-blue-300 px-2 text-white w-full"
          onClick={onFindLongestPalindrome}
          type="submit"
        >
          ok
        </button>

        <h2 className="text-center py-6 uppercase font-bold text-lg">ans</h2>
        <div className="border border-solid border-gray-300 p-3">{ans}</div>
      </div>
    </main>
  );
}
