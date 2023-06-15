import { findLongestPalindrome } from "@/utils/palindrome";
import { useState } from "react";

const maxLength = 1000;

export const Palindrome = () => {
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
    <>
      <textarea
        className="border-solid border border-gray-300 w-full p-3 rounded-sm"
        onChange={(e) => setText(e.target.value)}
        value={text}
        rows={4}
      />
      <small
        data-test-id="input-length"
        className="text-right w-full block text-[12px]"
      >
        {text.length}/{maxLength}
      </small>
      {errorMessage && <small>{errorMessage}</small>}
      <button
        data-test-id="submit-button"
        className="bg-[#003471] px-2 text-white w-full rounded-sm py-1 uppercase"
        onClick={onFindLongestPalindrome}
        type="submit"
      >
        ok
      </button>
      <h2 className="text-center pt-10 pb-6 uppercase font-bold text-lg">
        answer
      </h2>
      <div
        data-test-id="ans-box"
        className="border border-solid border-gray-300 p-3 break-words rounded-sm"
      >
        {ans ? (
          ans
        ) : (
          <span className="text-gray-400 text-center w-full block">{`<no palindrome>`}</span>
        )}
      </div>
    </>
  );
};
