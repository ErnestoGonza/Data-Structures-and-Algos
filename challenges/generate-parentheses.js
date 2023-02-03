/*

Given n pairs of parentheses, write a function to generate all combinations of
well-formed parentheses.

For example, given n = 2, a solution set is:

[
  "(())",
  "()()"
]

Given n = 3, a solution set is:

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]

Given n = 0, a solution set is:

[
  ""
]

*/

// function isValid(str) {
//   const stack = [];
//   let i = 0;
//   let len = str.length;

//   while (i < len) {
//     let curParen = str[i];
//     stack.push(curParen);

//     let open = stack[stack.length - 2];
//     let closed = stack[stack.length - 1];

//     if (open + closed === '()') {
//       stack.pop();
//       stack.pop();
//     }
//     i++;
//   }
//   return stack.length === 0;
// }

const generateParentheses = (n) => {
  const results = [];

  const generate = (str, l, r) => {
    if (r === 0) {
      results.push(str);
      return;
    }

    if (l > 0) generate(str + '(', l - 1, r);

    if (l < r) generate(str + ')', l, r - 1);
  };

  generate('', n, n);
  return results;
};

module.exports = { generateParentheses };
