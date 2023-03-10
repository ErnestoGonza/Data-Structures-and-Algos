/*

Given an arbitrarily nested array of strings, and a target keyword strong,
return the number of times a keyword appears in a nested array of arrays.

keywordCount(['bye', 'hi', ['cool', 'hi']], 'hi') -> 2 because 'hi' appears twice
keywordCount(['x', 'y', ['x', 'x'], 'a'], 'x') -> 3
keywordCount(['blah', 'key', ['inside', ['really inside']]], 'lol') -> 0

*/

const keywordCount = (array, keyword) => {
  let count = 0;

  function deepSearch(arr) {
    arr.forEach((el) => {
      if(Array.isArray(el)) deepSearch(el);
      else if(el === keyword) count++
    });
  };

  deepSearch(array);
  return count;

};

/*

Extension:

Given a nested array of arrays, return an array of keywords that appear the most
often. Return multiple results within the array if there's a tie. Return the
multiple in lexiographical (alphabetic) order.

keywordMode([['cars', 'bat'], 'apple', 'bat', 'cars']) -> ['bat', 'cars']
keywordMode([['ace', 'cool'], ['hi'], 'cool']) -> ['cool']

*/

const keywordMode = array => {
  const result = [];
  const counts = {};

  function deepSearch(arr) {
    arr.forEach((el) => {
      if(Array.isArray(el)) deepSearch(el);
      else counts[el] ? counts[el] ++ : counts[el] = 1;
    });
  };
 
  deepSearch(array)
  
  const entries = Object.entries(counts);

  const sortedEntries = entries.sort((a, b) => b[1] - a[1]);

  for(let i = 0; i < sortedEntries.length; i++) {
    if(i === 0) result.push(sortedEntries[i][0]);
    else if(sortedEntries[i][1] === sortedEntries[0][1]) result.push(sortedEntries[i][0]);
    else return result;
  }
};


keywordMode([['cars', 'bat'], 'apple', 'bat', 'cars'])



module.exports = {keywordCount, keywordMode};
