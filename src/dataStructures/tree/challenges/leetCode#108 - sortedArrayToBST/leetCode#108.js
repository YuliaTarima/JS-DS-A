// Given an array where elements are sorted in ascending order, convert it to a height balanced BST.
// // For this problem, a height-balanced binary tree is defined as a binary tree
// in which the depth of the two subtrees of every node never differ by more than 1.
//
// Example:
// Given the sorted array: [-10,-3,0,5,9],
// One possible answer is: [0,-3,9,-10,null,5]

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

// Runtime: 92 ms, faster than 55.06% of JavaScript online submissions for Convert Sorted Array to Binary Search Tree.
// Memory Usage: 43.5 MB, less than 5.13% of JavaScript online submissions for Convert Sorted Array to Binary Search Tree.
const sortedArrayToBST = function(nums) {

    function helper(nums){

        if(nums.length == 0){
            return null
        }

        const half = Math.floor(nums.length / 2);
        const root = new TreeNode(nums[half]);

        root.left = helper(nums.slice(0, half));
        root.right = helper(nums.slice(half + 1));
        return root;
    }

    return helper(nums);
};