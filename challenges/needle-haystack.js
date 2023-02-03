/* 
Determine whether a target substring can be found within a string! 
No regex allowed! No string.prototype.includes or string.prototype.indexOf!

Your solution should have O(n * m) time-complexity where:
n is equal to the given string length
m is equal to the target substring length

I.e. in 'xztzcatbfbbq' find 'cat' 

Input: 'xztzcatbfbbq', 'cat'
Output: true

Input: 'finding a needle in a haystack', 'lein'
Output: false
*/

const needleInHaystack = (string, substring) => {
  let result = false;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === substring[0]) {
      i++;
      result = true;
      for (let j = 1; j < substring.length; j++) {
        if (string[i] === substring[j]) {
          i++;
          result = true;
        } else result = false;
      }
    }
  }

  return result;
};

/*
Extension: Now imagine the target substring and string both might have underscores '_'.
Treat '_'s as wildcards, or blank pieces in Scrabble - i.e., they can be any letter.

Input: '_ello_orld', 'helloworl_'
Output: true

Input: 'montana', '__o__'
Output: false
*/

const needleInHaystackWithWildcards = (string, substring) => {
  let result = false;

  for (let i = 0; i < string.length; i++) {
    if (
      string[i] === substring[0] ||
      string[i] === '_' ||
      substring[0] === '_'
    ) {
      i++;
      result = true;
      for (let j = 1; j < substring.length; j++) {
        if (
          string[i] === substring[j] ||
          string[i] === '_' ||
          substring[j] === '_'
        ) {
          i++;
          result = true;
        } else result = false;
      }
    }
  }

  return result;
};

module.exports = { needleInHaystack, needleInHaystackWithWildcards };
