/*
Write a function findInOrderedSet that determines if a target value exists within an array of numbers.

Assuming that the array is sorted in ascending order, can you accomplish this with time complexity better than O(n)?

ex:
const nums = [-3, 0, 8, 13, 37]
findInOrderedSet(nums, 0);  -> true
findInOrderedSet(nums, 2);  -> false
*/

const findInOrderedSet = (
  array,
  target,
  startIndex = 0,
  endIndex = array.length - 1
) => {
  let midIndex;

  while (startIndex <= endIndex) {
    midIndex = Math.floor((startIndex + endIndex) / 2);
    if (array[midIndex === target]) return true;
    if (array[midIndex] > target) endIndex = midIndex - 1;
    if (array[midIndex] < target) startIndex = midIndex + 1;
  }

  return false;
};

console.log(findInOrderedSet([-3, 0, 8, 13, 37], -3));

/*
Extension:

Write a function findIn2dMatrix that determines if a target value exists within a two dimensional matrix.
The matrix has the following properties:
  - Each subarray in the matrix contains numbers sorted in ascending order
  - The *last* element in each subarray is smaller than than the *first* element in each following subarray  

ex:
const matrix = [
  [-3, -1,  2,  4,  5],
  [ 6,  7,  8, 13, 37],
  [41, 49, 50, 61, 75]
];
findIn2dMatrix(matrix, 13); -> true
findIn2dMatrix(matrix, 42); -> false

*/

const findIn2dMatrix = (matrix, target) => {
  if (Array.isArray(matrix[0])) {
    for (let arr of matrix) {
      if (arr[arr.length - 1] > target) return findIn2dMatrix(arr, target);
    }
  }

  const mid = Math.floor(matrix.length / 2);

  if (matrix[mid] === target) return true;
  if (matrix.length === 1) return false;

  return matrix[mid] > target
    ? findInOrderedSet(matrix.slice(0, mid), target)
    : findInOrderedSet(matrix.slice(mid), target);
};

const matrix = [
  [-3, -1, 2, 4, 5],
  [6, 7, 8, 13, 37],
  [41, 49, 50, 61, 75],
];

console.log(findIn2dMatrix(matrix, 13));
console.log(findIn2dMatrix(matrix, 42));

module.exports = { findInOrderedSet, findIn2dMatrix };
