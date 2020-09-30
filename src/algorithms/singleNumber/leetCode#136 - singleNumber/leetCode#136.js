// Given a non-empty array of integers, every element appears twice except for one.
// Find that single one.
//
// Note:
// Your algorithm should have a linear runtime complexity.
// Could you implement it without using extra memory?

/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function (nums) {
    const map = {};
    for (let num of nums) {
        map[num] ? map[num] = map[num] + 1 : map[num] = 1;
    }

    let minCount = +Infinity;
    let result = undefined;
    for (let num in map) {
        (map[num] < minCount)
        && ((result = num) && (minCount = map[num]));
    }
    return +result;
};
module.exports = singleNumber;