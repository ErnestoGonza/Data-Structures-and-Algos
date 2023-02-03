/** Write a function that calculates x^y, where x is given as the base and y is given as the power.
 *
 * Example:
 * pow(2,4) => 2^4 = 16
 * Rational: 2 * 2 * 2 * 2 = 16
 *
 * Extension: Use recursion
 */

function pow(base, power) {
  // for a recursive approach remember to write your base case
  // write your recursive logic here
  if(power === 0) return 1;
  if(power === 1) return base;
  return base * pow(base, (power - 1))
}



/**
 * Extension: Use recursion to solve the problem in O(n) time complexity -> Linear time complexity
 */

function powRecurse(base, power) {
  // for a recursive approach remember to write your base case
  // write your recursive logic here
  if(power === 0) return 1;
  if(power === 1) return base;
  return base * pow(base, (power - 1))
}

module.exports = { pow, powRecurse };
