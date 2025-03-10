/**
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
  @param {string} str
  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  let strSpecialCharRemoved = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  let reversedStr = strSpecialCharRemoved.split("").reverse().join("");
  if(!(strSpecialCharRemoved === reversedStr)){
    return false;
  }
  return true;
}

module.exports = isPalindrome;
