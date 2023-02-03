/*

Consider an array called apple-stock as an argument. This array 
represents the variation of an Apple stock during a single day. 
The values in the array are in chronological order.

ex: [1000, 500, 1500, 2000, 0] --> The stock began at 1000 and closed at 0;

Write a function called highestProfit that calculates the highest profit 
you can make in the given day by buying and selling a single Apple stock. 
This is comprised of one buy and one sell. Keep your worst case 
time complexity in O(n^2).

Return 0 if no profit is possible OR if input is invalid.

** Extension **
Refactor your function to improve your time complexity to O(n).
Hint: Use pointers to keep track of the indices of max, min to 
calculate profit along the array.

*/

const highestProfit = apple => {
    let minIndex = 0;
    if(!Array.isArray(apple)) return 0;

    return apple.reduce((acc, curr, index) => {
      if(curr < apple[minIndex]) minIndex = index;

      const sellStock = apple[index];
      const buyStock = apple[minIndex];
      const profit = sellStock - buyStock;

      if(profit > acc) acc = profit;
      
      return acc;
    }, 0)

    // if(!apple.length) return 0;
    // let profit = 0;

    // const min = Math.min(...apple);
    // const max = Math.max(...apple);
    // if(apple.indexOf(min) < apple.indexOf(max)) return (max - min);

    // for(let i = 0; i < apple.length; i++) {
    //     for(let j = i + 1; j < apple.length; j++) {
    //         if(apple[j] - apple[i] > profit) profit = (apple[j] - apple[i]);
    //     }
    // }
    // return profit;
}

console.log(highestProfit([1000, 500, 1500, 2000, 0]))

module.exports = {highestProfit}