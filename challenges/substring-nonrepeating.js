/*

Given a string, find the length of the longest substring without repeating characters.
Just return the length of the substring, not the substring itself.

Example 1:
Input: "abcabcbb"
Output: 3
Explanation: The longest substring is "abc", with the length of 3.

Example 2:
Input: "bbbbb"
Output: 1
Explanation: The longest substring is "b", with the length of 1.

Example 3:
Input: "pwwkew"
Output: 3
Explanation: The longest substring is "wke", with the length of 3.
Note that the longest substring must actually be a substring, as "pwke" is a
subsequence and not a substring.

Example 4:
Input: ""
Output: 0
Explanation: an empty string has length 0

Hint: think about the largest valid "window" of a substring without repeating
characters. How do we keep track of this "window"?

*/

const { start } = require('repl');

const substringNonrepeating = (str) => {
  let left = 0;
  let max = 0;
  let result = new Set();

  for (let i = 0; i < str.length; i++) {
    //The code will check for an existing item on the set
    // If found, all the previously saved items will be deleted
    // the set will return to being empty
    while (result.has(str[i])) {
      console.log(result);
      result.delete(str[left]);
      left += 1;
    }
    result.add(str[i]);
    max = Math.max(max, i - left + 1);
  }
  return max;
};

console.log(substringNonrepeating('lolk'));

module.exports = { substringNonrepeating };
