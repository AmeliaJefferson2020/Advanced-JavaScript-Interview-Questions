/** Return true if a given string is a palindrome and return false if it
 * is not. Palindromes are strings that form the exact same string when reversed.
 * Make sure to include spaces and punctuation when determining if the given
 * string is a palindrome.
 *
 * @example
 * palindrome('abba') === true
 * palindrome('abcba') === true
 * palindrome('frontend') === false
 */


//SOLUTION 1
//const palindrome = (str) => {
//const reverseString = str.split("").reverse().join("");

//return str === reverseString;
//};


//SOLUTION 2
//const palindrome = (str) => {
  //return str
    //.split("")
    //.every((char, index) => char === str[str.length - 1 - index]);
//};


//SOLUTION 3
const palindrome = (str) => {
    const middle = Math.floor(str.length / 2);
    for (let i = 0; i < middle; ++i) {
        const oppositeIndex = str.length - 1 - i;
        if (str[i] !== str[oppositeIndex]) {
            return false;
        }
    }

    return true;
};

module.exports = palindrome;
