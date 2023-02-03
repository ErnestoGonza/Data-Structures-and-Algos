/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' const wow = { yo: thisIsAwesome() }'); // true
 * balancedParens(' const newton = () => { telescopes.areSicc(); '); // false
 *
 *
 */

const balancedParens = input => {
    const stack = [];
    const brackets = '()[]{}';
    
    for(let bracket of input) {
        let bracketsIndex = brackets.indexOf(bracket);
        
        if(bracketsIndex % 2 === 0) {
            stack.push(brackets[bracketsIndex + 1])
        } 
        else if (bracketsIndex % 2 === 1) {
            if(stack.pop() !== brackets[bracketsIndex]) {
                return false;
            }
        }
    }
    return stack.length === 0;
};

balancedParens(' const coolFunc = () => { anotherCoolFunc(); }')
// console.log(balancedParens('hello'))

module.exports = { balancedParens} ;
