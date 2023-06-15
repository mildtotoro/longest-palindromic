/**
 * Find the longest palindrome
 * @param text
 * @returns string
 */

/**
 * @param {string} s
 * @return {string}
 */
export function findLongestPalindrome(s: string): string {
  let longestCount = 0;
  let leftIndex = 0;
  if (s.length < 2) {
    return s;
  }

  const helper = (i: number, j: number) => {
    console.log("i", i);
    console.log("j", j);
    while (s[i] === s[j] && i >= 0 && j <= s.length - 1) {
      i--;
      j++;
    }

    if (longestCount < j - i - 1) {
      console.log("longestCount", longestCount);
      console.log("leftIndex", leftIndex);
      longestCount = j - i - 1;
      leftIndex = i + 1;
    }
  };

  for (let index = 0; index < s.length; index++) {
    // const element = s[index];
    let i = index;
    let j = index + 1;
    // helper(i, i);
    helper(i, j);
  }
  return s.slice(leftIndex, leftIndex + longestCount);
}

export function findLongestPalindromeOld(text: string): string {
  if (text.length === 0) return "";
  if (text.length === 1) return text;
  const defaultString = text.length > 1 ? text[0] : "";
  const stringPalindromeOdds = findMaxPalindromeOddLength(text);
  const stringPalindromeEvens = findMaxPalindromeEvenLength(text);

  return findLongestString([
    defaultString,
    ...stringPalindromeOdds,
    ...stringPalindromeEvens,
  ]);
}

export function findMaxPalindromeEvenLength(text: string): string[] {
  const lastIndex = text.length - 1;
  let startIndex = 0;
  let endIndex = 0;
  let stringPalindromeEvens: string[] = [];
  let textCheckPalindrome = "";
  let maxLength = 0;

  for (let anchorIndex = 0; anchorIndex < lastIndex; anchorIndex++) {
    startIndex = anchorIndex;
    endIndex = startIndex + 1;
    textCheckPalindrome = "";
    while (endIndex <= lastIndex && startIndex >= 0) {
      const leftChar = text[startIndex];
      const rightChar = text[endIndex];
      textCheckPalindrome = `${leftChar}${textCheckPalindrome}${rightChar}`;

      if (checkPalindrome(textCheckPalindrome)) {
        if (textCheckPalindrome.length > maxLength) {
          stringPalindromeEvens = [textCheckPalindrome];
          maxLength = textCheckPalindrome.length;
        } else if (textCheckPalindrome.length === maxLength) {
          stringPalindromeEvens.push(textCheckPalindrome);
        }

        if (text.length === maxLength) {
          return stringPalindromeEvens;
        }

        startIndex = startIndex - 1;
        endIndex = endIndex + 1;
      } else {
        textCheckPalindrome = "";
        break;
      }
    }
  }

  return stringPalindromeEvens;
}

export function findMaxPalindromeOddLength(text: string): string[] {
  const lastIndex = text.length - 1;
  let startIndex = 0;
  let endIndex = 0;
  let stringPalindromeOdds: string[] = [];
  let textCheckPalindrome = ``;
  let maxLength = 0;
  for (let centerIndex = 0; centerIndex < lastIndex; centerIndex++) {
    startIndex = centerIndex - 1;
    endIndex = centerIndex + 1;

    textCheckPalindrome = ``;
    while (startIndex >= 0 && endIndex <= lastIndex) {
      let startChar = text[startIndex];
      let centerChar = text[centerIndex];
      let endChar = text[endIndex];

      if (textCheckPalindrome === "") {
        textCheckPalindrome = centerChar;
      }

      textCheckPalindrome = `${startChar}${textCheckPalindrome}${endChar}`;

      if (checkPalindrome(textCheckPalindrome)) {
        if (textCheckPalindrome.length > maxLength) {
          stringPalindromeOdds = [textCheckPalindrome];
          maxLength = textCheckPalindrome.length;
        } else if (textCheckPalindrome.length === maxLength) {
          stringPalindromeOdds.push(textCheckPalindrome);
        }

        if (text.length === maxLength) {
          return stringPalindromeOdds;
        }

        startIndex = startIndex - 1;
        endIndex = endIndex + 1;
      } else {
        break;
      }
    }
  }

  return stringPalindromeOdds;
}

export function findLongestString(list: string[]): string {
  if (list.length === 0) return "";
  let res = list[0];
  list.forEach((text) => {
    if (res.length < text.length) {
      res = text;
    }
  });
  return res;
}

export function checkPalindrome(text: string): boolean {
  const lastIndexStart = Math.floor(text.length / 2);
  let endIndexStart = text.length - 1;
  let isPalindrome = false;
  for (let i = 0; i <= lastIndexStart; i++) {
    if (text[i] === text[endIndexStart]) {
      endIndexStart = endIndexStart - 1;
      isPalindrome = true;
    } else {
      isPalindrome = false;
      break;
    }
  }
  return isPalindrome;
}
