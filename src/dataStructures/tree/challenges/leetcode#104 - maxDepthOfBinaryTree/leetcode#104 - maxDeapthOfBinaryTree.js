/*
Given a binary tree, find its maximum depth.
The maximum depth is the number of nodes
along the longest path from the root node
down to the farthest leaf node.
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

// const maxDepth = function(root) {
//     return countDepth(root);
//
//     function countDepth(node){
//         if(!node){
//             return 0;
//         }
//         else {
//             return Math.max(countDepth(node.left), countDepth(node.right)) + 1
//         }
//     }
// };

//Runtime: 88 ms, faster than 49.65% of JavaScript online submissions for Maximum Depth of Binary Tree.
// Memory Usage: 41.3 MB, less than 7.09% of JavaScript online submissions for Maximum Depth of Binary Tree.
const maxDepth = function (root) {

    if (!root) return null;
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;

};