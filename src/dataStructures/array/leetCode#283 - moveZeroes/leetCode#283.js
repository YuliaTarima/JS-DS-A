// Given an array nums, write a function to move all 0's to the end of it
// while maintaining the relative order of the non-zero elements.

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// Runtime: 80 ms, faster than 81.89% of JavaScript online submissions for Move Zeroes.
// Memory Usage: 40.3 MB, less than 5.71% of JavaScript online submissions for Move Zeroes.
const moveZeroes = function(nums) {
    const zeroes = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            zeroes.push(...nums.splice(i, 1));
            i--;
        }
    }
    nums.push(...zeroes);
    return nums;
};

module.exports = moveZeroes;