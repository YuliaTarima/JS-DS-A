// Given two non-negative integers num1 and num2
// represented as strings,
// return the product of num1 and num2,
// also represented as a string.

// Note:
// The length of both num1 and num2 is < 110.
// Both num1 and num2 contain only digits 0-9.
// Both num1 and num2 do not contain any leading zero, except the number 0 itself.
// You must not use any built-in BigInteger library or convert the inputs to integer directly.

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */

// // Time Complexity: O (n * m)
// // Space Complexity: O (n * m)
// // Runtime: 108 ms, faster than 44.67% of JavaScript online submissions for Multiply Strings.
// // Memory Usage: 38.5 MB, less than 69.08% of JavaScript online submissions for Multiply Strings.
// const multiply = function(num1, num2) {
//     // result length = sum of lengths of both numbers
//     const result = Array(num1.length + num2.length).fill(0);
//     const num2LastIndex = num2.length - 1;
//     const num1LastIndex = num1.length - 1;
//     const resultLastIndex = result.length - 1;
//
//     for(let j = num2LastIndex; j > -1; j--) {
//         for (let i = num1LastIndex; i > -1; i--) {
//
//             const product = num1[i] * num2[j];
//             const resultIndex = resultLastIndex - ((num2LastIndex - j) + (num1LastIndex - i));
//             result[resultIndex] += product;
//
//             // carry on case
//             if(result[resultIndex] > 9) {
//                 result[resultIndex - 1] += Math.floor(result[resultIndex] / 10);
//                 result[resultIndex] %= 10;
//             }
//         }
//     }
//
//     // remove leading zeroes
//     while(result[0] === 0){
//         result.shift();
//     }
//
//     return  result.join('') || '0';
//     // return  result ? result.join('') : 0;
// };

module.exports = multiply;