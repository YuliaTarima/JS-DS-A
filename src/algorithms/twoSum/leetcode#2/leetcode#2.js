// https://leetcode.com/problems/two-sum/

// Given an array of integers nums and and integer target,
// return the indices of the two numbers
// such that they add up to target.
// You may assume that each input
// would have exactly one solution,
// and you may not use the same element twice.
// You can return the answer in any order.

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// nums[0] + nums[1] == 9

// Constraints:
// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

// Corner cases:
// empty array as input []
// no solution [1,1]
// multiple solutions [2,7,2,7]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// // Nested for loop; O^2
// const twoSum = function (nums, target) {
//     // check each element in array
//     for (let i = 0; i < nums.length; i++) {
//         // check all combinations for each i
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] == target) {
//                 return [i, j]
//             }
//         }
//     }
// };

// // Two-pass Hash Table (JS object); O(1)
// const twoSum = function(nums, target) {
//     const indices = {};
//
//     nums.forEach((item, index) => {
//         // add each array element as item: index to indices object
//         indices[item] = index
//     });
//
//     for (let index = 0; index < nums.length; index++) {
//         // calculate target - current element
//         // value we need for current element to add up to target
//         const complement = target - nums[index];
//
//         // check if such a number exists
//         // saved as item: index; item a s a key and index as a value
//         if (indices[complement] !== undefined && indices[complement] !== index) {
//             return [index, indices[complement]]
//         }
//     }
// };

// One-pass Hash Table
const twoSum = function(nums, target) {
    const indices = new Map();

    for (let index = 0; index < nums.length; index++) {
        const complement = target - nums[index];

        if (indices.has(complement)) {
            return [indices.get(complement), index]
        }

        indices.set(nums[index], index)
    }
};

module.exports = twoSum;