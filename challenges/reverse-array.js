/*

Reverse and return an array in-place. Do not create a new array in memory.
Instead, modify the array as given. Do not use the array reverse method built in
to the array prototype while solving the problem.

*/

const reverseArray = (array) => {
  for (let i = 0, j = array.length - 1; i < j; i++, j--) {
    const first = array[i];
    array[i] = array[j];
    array[j] = first;
  }
  return array;
};
// console.log(reverseArray([1, 2, 3, 4, 5]));

/*

Extension: (recommended to solve reverseArray first)

Given a string as a sentence "bob likes dogs alot" return the word reversal
"alot dogs likes bob". Do not use the array reverse method built in to the array
prototype.

The input string will always be a series of words separated by spaces between
them, with each word containing only lowercase letters and no punctuation. The
input string will always have at least one word

*/

const reverseSentence = (sentence) => {
  const array = sentence.split(' ');

  for (let i = 0, j = array.length - 1; i < j; i++, j--) {
    const first = array[i];
    array[i] = array[j];
    array[j] = first;
  }
  return array.join(' ');
};

console.log(reverseSentence('bob likes dogs alot'));

module.exports = { reverseArray, reverseSentence };
