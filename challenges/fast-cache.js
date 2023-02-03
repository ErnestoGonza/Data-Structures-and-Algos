/*
 define a function "fastCache" that takes one argument, a function, and returns a function. 
 When fastCache is invoked it creates an object that tracks calls to the returned function, where each input to the returned function is associated with its output. 
 Every subsequent call to that returned function with the same argument will return the output directly from the object, instead of invoking the original function again.
*/

const fastCache = fn => {
   let cache = { };

    return arg => {
      if (Object.hasOwn(cache, arg)) { //cache[arg] - we used Object.hasOwn instead of cache because if the value is 0 it returns false
        return cache[arg];
      }
      return cache[arg] = fn(arg);
    };
}
//good for caching fetch api so it doesn't run the same fetch again

/*
 Extension: Rewrite fastCache so it can handle array or object input, and any number of arguments.
 HINT: you might need to use the spread operator...
*/

const fastCacheAdvanced = fn => {
  cache = {};
  return (...args) => {
    // console.log(args)
    const argsString = JSON.stringify(args);
    // console.log(argsString)
    if(Object.hasOwn(cache, argsString)) {
      return cache[argsString];
    }
    // console.log(...args)
    const result = fn(...args)
    cache[argsString] = result;
    return result;
  }
};

const sumArray = arr => arr.reduce((a, c) => a + c)
const cachedSumArray = fastCacheAdvanced(sumArray)
console.log(cachedSumArray([1, 2, 3, 4]))

module.exports = {fastCache, fastCacheAdvanced};