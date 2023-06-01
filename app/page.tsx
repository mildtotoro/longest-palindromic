"use client";

import { findLongestPalindrome } from "@/utils/palindrome";
import { useState } from "react";

const maxLength = 1000;

export default function Home() {
  const [text, setText] = useState("");
  const [ans, setAns] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function onFindLongestPalindrome() {
    if (text.length > maxLength) {
      setErrorMessage(`Please input text length not more than ${maxLength}`);
    } else {
      setErrorMessage("");
      setAns(findLongestPalindrome(text));
    }
  }

  return (
    <main className="min-h-screen items-center justify-center flex px-2 text-gray-700">
      <div className="max-w-full basis-[500px]">
        <h2 className="text-center py-6 uppercase font-bold text-lg">
          Find The Longest Palindrome
        </h2>
        <textarea
          className="border-solid border border-gray-300 w-full p-3 rounded-sm"
          onChange={(e) => setText(e.target.value)}
          value={text}
          rows={4}
        />
        <small className="text-right w-full block text-[12px]">
          {text.length}/{maxLength}
        </small>
        {errorMessage && <small>{errorMessage}</small>}
        <button
          className="bg-[#003471] px-2 text-white w-full rounded-sm py-1 uppercase"
          onClick={onFindLongestPalindrome}
          type="submit"
        >
          ok
        </button>
        <h2 className="text-center pt-10 pb-6 uppercase font-bold text-lg">
          answer
        </h2>
        <div className="border border-solid border-gray-300 p-3 break-words rounded-sm">
          {ans ? (
            ans
          ) : (
            <span className="text-gray-400 text-center w-full block">{`<no palindrome>`}</span>
          )}
        </div>
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
