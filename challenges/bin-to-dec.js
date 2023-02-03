/* 

Given a string that represents a Binary Number, write a function that converts this string into a decimal number. DO NOT use the native parseInt() method. 

For example: 

binToDec('0')   -> 0
binToDec('11')  -> 3
binToDec('100') -> 4
binToDec('101') -> 5
binToDec('0101') -> 5

For more information on how to read binary, check out this article: 
https://m.wikihow.com/Read-Binary

*/

//101010
//index in reverse
//543210
//2 to the power of each index


//Both functions work, initially i created the other function in case the combination of split.reverse creates an O(2n) time complexity but after doing some research
//it seems to be O(n) on both functions.

function binToDec(binString){
    if(!binString) return undefined;
    //reversed the string to have the 0 index start from end
    const binReverse = binString.split('').reverse();
    let total = 0;
    for(let i = 0; i < binReverse.length; i++) {
        //iterate through from end multiplying the current element by 2 to the power of the index
        total += (binReverse[i] * (2 ** i))
    }
    return total;
}


//testing to see if I can do this without splitting and reversing

function inToDec(binString) {
    if(!binString) return undefined;
    let total = 0;
    let endIndex = 0;
    for(let i = binString.length - 1; i >= 0; i--) {
        total += (binString[i] * (2 ** endIndex));
        endIndex++;
    }
    return total;
}

console.log(inToDec('101010'));
module.exports = {binToDec};