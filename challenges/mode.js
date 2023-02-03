/*

Given an array of numbers (integers), return the mode, that is, the number that
appears most often. If there are multiple modes, use the max of the modes.

Assume that at least one number is present in the array.

e.g.
mode([3, 2, 4, 3]) -> 3
mode([7, 5, 8, 8, 2, 5]) -> 8

*/

const mode = array => {
  const tally = {};
  let modeNum = -Infinity, maxCount = 0;

  array.forEach((val) => {
    tally[val] = (tally[val] || 0) + 1;
    if(tally[val] > maxCount || (tally[val] === maxCount && val > modeNum)) {
      maxCount = tally[val];
      modeNum = val;
    }
  });

  return modeNum;
};

console.log(mode([3, 2, 3, 4]))
console.log(mode([7, 5, 8, 8, 2, 5]))
console.log(mode([1, 6, 7, 5, 8, 8, 10, 6, 10, 4, 6, 11]))
/*

Extension:

Given an arbitrarily nested array of numbers (integers), return the mode, that
is, the number that appears most often. If there are multiple modes, use the max
of the modes.

Assume that at least one number is present in the nested array structure,
although some of the nested arrays may be empty.

e.g.
mode([[3], [2, [4]], 3]) -> 3
mode([7, [[5, [8], 8], 2, 5]]) -> 8
mode([4, []]) -> 4 

*/

const modeNested = arr => {
  if(!arr[0]) return undefined;
  const obj = {};
  let modeNum = -Infinity;
  const array = flatten(arr)

  function flatten(nestedArr) {
    for(let i = 0; i < nestedArr.length; i++) {
      if(Array.isArray(nestedArr[i])) return flatten(nestedArr.flat())
    }
    return nestedArr;
  }

  for(let el = 0; el < array.length; el++) {
    if(Array.isArray(array[el])) array.flat();
    if(obj[array[el]]) obj[array[el]]++
    else obj[array[el]] = 1;
  }

  for(const key in obj) {
    if(obj[key] >= modeNum) modeNum = +key;
  }

  for(const key in obj) {
    if(+key > modeNum && obj[key] === obj[modeNum]) modeNum = +key; 
  }

  return modeNum;
};
console.log(modeNested([7, [[5, [8], 8], 2, 5]]))
console.log(modeNested([4, []]))
console.log(modeNested([]))

module.exports = {mode, modeNested};
