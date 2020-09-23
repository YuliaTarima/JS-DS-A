// Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.
//
// Note:
//
// The length of both num1 and num2 is < 5100.
// Both num1 and num2 contains only digits 0-9.
// Both num1 and num2 does not contain any leading zero.
// You must not use any built-in BigInteger library or convert the inputs to integer directly.

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const addStrings = function(num1, num2) {
    if(num1 === '0') return num2;
    if(num2 === '0') return num1;

    const length = Math.max(num1.length, num2.length) + 1;
    const result = new Array(length).fill(0);
    let carry = 0;

    for(let i = 0; i < length; i++){
        const digit1 = parseInt(num1[num1.length - 1 - i] || 0, 10);
        const digit2 = parseInt(num2[num2.length - 1- i] || 0, 10);

        let sum = digit1 + digit2 + carry;
        carry = 0;

        if (sum > 9) {
            carry = Math.floor(sum / 10);
            sum = sum % 10;
        }

        result[length - 1 - i] = sum;
    }

    while(result[0] === 0) result.shift();
    return result.join('')
};

module.exports = addStrings;