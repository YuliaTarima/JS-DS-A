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

// const multiply = function (num1, num2) {
//     // result length = sum of lengths of both numbers
//     const result = Array(num1.length + num2.length).fill(0);
//     const num2LastIndex = num2.length - 1;
//     const num1LastIndex = num1.length - 1;
//     const resultLastIndex = result.length - 1;
//
//     for (let j = num2LastIndex; j > -1; j--) {
//         for (let i = num1LastIndex; i > -1; i--) {
//
//             const product = num1[i] * num2[j];
//             const resultIndex = resultLastIndex - ((num2LastIndex - j) + (num1LastIndex - i));
//             result[resultIndex] += product;
//
//             // carry on case
//             if (result[resultIndex] > 9) {
//                 result[resultIndex - 1] += Math.floor(result[resultIndex] / 10);
//                 result[resultIndex] %= 10;
//             }
//         }
//     }

// Runtime: 96 ms, faster than 62.48% of JavaScript online submissions for Multiply Strings.
// Memory Usage: 40.8 MB, less than 34.69% of JavaScript online submissions for Multiply Strings.
const multiply = function (num1, num2) {

    if (!+num1 || !+num2 || num1 === '0' || num2 === '0') return '0'

    const result = Array(num1.length + num2.length).fill(0);
    let resultLastIndex = result.length - 1;

    for (let i = num1.length - 1; i >= 0; i--) {
        let resultCurrIndex = resultLastIndex--;

        for (let j = num2.length - 1; j >= 0; j--) {
            const product = num1[i] * num2[j] + result[resultCurrIndex];
            result[resultCurrIndex] = product % 10;
            result[--resultCurrIndex] += Math.floor(product / 10);
        }
    }

    while (result[0] === 0) result.shift();
    return result.join('');
};

// Runtime: 92 ms, faster than 72.92% of JavaScript online submissions for Multiply Strings.
// Memory Usage: 42.1 MB, less than 32.56% of JavaScript online submissions for Multiply Strings.
// const multiply = (a, b) => {
//
//     const parts = [];
//     // multiply left to right
//     for (let i = 0; a[i] >= 0; i++) {
//         for (let j = 0; b[j] >= 0; j++) {
//             // i+j will shift position to the right
//             if (!parts[i + j]) parts[i + j] = 0;
//             parts[i + j] += a[i] * b[j];
//         }
//     }
//
//     // reverse to sum up the final result starting from the end of array
//     const reversedParts = parts.reverse();
//
//     for (let i = 0; i < reversedParts.length; i++) {
//         if (reversedParts[i] >= 10) {
//             if (!reversedParts[i + 1]) reversedParts[i + 1] = 0;
//
//             reversedParts[i + 1] += parseInt(reversedParts[i] / 10);
//             reversedParts[i] %= 10;
//         }
//     }
//
//     //reverse back to read the results from the right end
//     const result = reversedParts.reverse();
//
//     // remove leading zeros
//     while (result[0] === 0) result.shift();
//     return result.join('') || '0';
// }


// Runtime: 96 ms, faster than 62.48% of JavaScript online submissions for Multiply Strings.
// Memory Usage: 40.7 MB, less than 34.86% of JavaScript online submissions for Multiply Strings.
// const multiply = (a, b) => {
//
//     const result = [];
//
//     for (let i = 0; a[i] >= 0; i++) {
//         for (let j = 0; b[j] >= 0; j++) {
//             if (!result[i + j]) result[i + j] = 0;
//             result[i + j] += a[i] * b[j];
//         }
//     }
//
//     for (let i = result.length-1; i >= 0; i--) {
//         if ([i-1] >= 0 && result[i] >= 10) {
//             result[i - 1] += parseInt(result[i] / 10);
//             result[i] %= 10;
//         }
//     }
//
//     while (result[0] === 0) result.shift();
//     return result.join('') || '0';
// }

module.exports = multiply;