// Given an array of size n, find the majority element.
// The majority element is the element that appears more than ⌊ n/2 ⌋ times.
// You may assume that the array is non-empty and the majority element
// always exist in the array.

/**
 * @param {number[]} nums
 * @return {number}
 */

// Runtime: 92 ms, faster than 32.94% of JavaScript online submissions for Majority Element.
// Memory Usage: 42.6 MB, less than 5.06% of JavaScript online submissions for Majority Element.
// const majorityElement = function(nums) {
//
//     const numCounts = {};
//     let maxNumCounter = 0;
//     let maxNum = undefined;
//
//     for (num of nums){
//         numCounts[num] ? numCounts[num]++ : numCounts[num] = 1;
//     }
//
//     for (num in numCounts) {
//         if (numCounts[num] > maxNumCounter) {
//             maxNumCounter = numCounts[num];
//             maxNum = num;
//         }
//     }
//
//     return maxNum;
// };

// Runtime: 80 ms, faster than 80.26% of JavaScript online submissions for Majority Element.
// Memory Usage: 42.7 MB, less than 5.06% of JavaScript online submissions for Majority Element.
// const majorityElement = function(nums) {
//
//     const numCounts = {};
//     // let maxNumCounter = 0;
//
//     for (num of nums){
//         numCounts[num] ? numCounts[num]++ : numCounts[num] = 1;
//     }
//
//     const elMax = Object.entries(numCounts).reduce(
//         (prev, curr) => {
//             if (!prev[1]) return curr
//             if (curr[1] > prev[1]) return curr
//             return prev
//         },
//         []);
//     return elMax[0]
// };


// Runtime: 84 ms, faster than 62.81% of JavaScript online submissions for Majority Element.
// Memory Usage: 41.2 MB, less than 8.87% of JavaScript online submissions for Majority Element.
const majorityElement = function(nums) {

    const numCounts = nums.reduce(
        (prev, curr) => {
            (!prev[curr]) ? prev[curr] = 1 : prev[curr]++;
            return prev;
        },
        {});

    const elMax = Object.entries(numCounts).reduce(
        (prev, curr) => {
            if (!prev[1]) return curr
            if (curr[1] > prev[1]) return curr
            return prev
        },
        []);
    return elMax[0]
};

module.exports = majorityElement;