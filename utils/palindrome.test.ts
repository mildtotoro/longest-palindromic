import {
  findLongestPalindrome,
  checkPalindrome,
  findLongestString,
} from "./palindrome";

describe("findLongestPalindrome module", () => {
  test.each([
    { input: "cbbs", output: "bb" },
    { input: "xiaav", output: "aa" },
    { input: "redder", output: "redder" },
    { input: "xxxxxxxxxxxxxxxxxxxxx", output: "xxxxxxxxxxxxxxxxxxxxx" },
    { input: "", output: "" },
    { input: "q", output: "q" },
    { input: "qd", output: "q" },
    { input: "sss", output: "sss" },
    { input: "ssss", output: "ssss" },
    { input: "aass", output: "aa" },
  ])("inline table", ({ input, output }) => {
    expect(findLongestPalindrome(input)).toMatch(output);
  });
});

describe("findLongestString module", () => {
  test.each([
    { input: ["cbbs", "", "asdweewqe"], output: "asdweewqe" },
    { input: [], output: "" },
    { input: [""], output: "" },
    { input: ["d", "e"], output: "d" },
    { input: ["d", "e", "dd"], output: "dd" },
  ])("inline table", ({ input, output }) => {
    expect(findLongestString(input)).toEqual(output);
  });
});

describe("checkPalindrome module", () => {
  test.each([
    { input: "babad", output: false },
    { input: "cbbs", output: false },
    { input: "xiaav", output: false },
    { input: "redder", output: true },
    { input: "redderk", output: false },
    { input: "zzzzz", output: true },
    { input: "z", output: true },
    { input: "zd", output: false },
    { input: "dod", output: true },
    { input: "doud", output: false },
    { input: "ii", output: true },
    { input: "iakjsdhaksjdhi", output: false },
    { input: "aass", output: false },
  ])("inline table", ({ input, output }) => {
    expect(checkPalindrome(input)).toEqual(output);
  });
});
