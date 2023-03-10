/*
  Given an array of numbers and a target number,
  return true if two of the numbers in the array add up to the target.
  Otherwise, return false.

  You may assume that each input would have exactly one solution, and you may not use the same element twice.
  The straightforward way to solve this problem would take O(n²)time. Is it possible to do this in O(n) time? 

  Example:

  const nums = [2, 5, 11, 15]
  twoSum(num, 7) -> true
  Rational:  nums[0] + nums[1] = 2 + 5 = 7,

  twoSum(nums, 9) -> false
  Rational: No elements inside the array sum up to the target number
*/

const twoSum = (arr, target) => {
  const cache = {};

  for (let i = 0; i < arr.length; i++) {
    if (cache[target - arr[i]]) return true;
    else cache[arr[i]] = true;
  }

  return false;
};

/*
Extension:
Given an array of numbers and a target number, 
return true if three of the numbers in the array add up to the target.
Otherwise, return false.

The straightforward way to solve this problem would take O(n³) time. Is it possible to do this in O(n²) time?

*/

const threeSum = (arr, target) => {
  const cache = {};

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (
        cache[
          target -
            (Math.max(arr[i], arr[j]) - Math.abs(Math.min(arr[i], arr[j])))
        ]
      )
        return true;
      else cache[Math.max(arr[i], arr[j]) - Math.abs(Math.min(arr[i], arr[j]))];
    }
  }

  return false;
};

module.exports = { twoSum, threeSum };
