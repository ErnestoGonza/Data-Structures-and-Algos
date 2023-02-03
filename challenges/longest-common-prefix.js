/* Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "". (Note: All given inputs are in lowercase letters a-z.)

ex: longestCommonPrefix(["flower","flow","flight"]) --> "fl"

longestCommonPrefix(["dog","racecar","car"]) --> "" (There is no common prefix among the input strings)

*/

const longestCommonPrefix = (strs) => {
  // Return early on empty input
  if (!strs.length) return '';

  // Loop through the letters of the first word
  for (let i = 0; i <= strs[0].length; i++) {
    // Check if this character is present in the same position of every string
    if (!strs.every((string) => string[i] === strs[0][i])) {
      // If not, return the string up to and including the previous character
      return strs[0].slice(0, i);
    }
  }

  return strs[0];
};

console.log(longestCommonPrefix(['flower', 'flow', 'flight']));

module.exports = { longestCommonPrefix };
