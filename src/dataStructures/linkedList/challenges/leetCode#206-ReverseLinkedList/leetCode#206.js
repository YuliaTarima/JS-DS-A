// A linked list can be reversed either iteratively or recursively

// Example:
// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL

/*
Definition for singly-linked list:
function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
}
*/

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// // iterative approach
// // Time complexity : O(n)
// // Space complexity : O(1)
// const reverseList = function(head) {
//
//     let prev = null; // the tail
//
//     while (head) {
//         // move nextNode one level up
//         const nextNode = head.next;
//
//         // point head's .next to the prev (null for first iteration)
//         head.next = prev;
//
//         // move prev one level up
//         prev = head;
//
//         // move head one level up
//         head = nextNode;
//     }
//
//     return prev
// };

// recursive approach
// Time complexity : O(n)
// Space complexity : O(n).
// The extra space comes from implicit stack space due to recursion.
// The recursion could go up to nn levels deep.
// Runtime: 80 ms, faster than 70.16% of JavaScript online submissions for Reverse Linked List.
// Memory Usage: 38.9 MB, less than 31.99% of JavaScript online submissions for Reverse Linked List.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

const tail = new ListNode('tail', null);
const node3 = new ListNode('third', tail);
const node2 = new ListNode('second', node3);
const head = new ListNode('head', node2);
//  console.log(node1)
//  console.log(node2)
//  console.log(node3)
//  console.log(node4)

const reverseList = function (head) {

    if (head === null || head.next === null) return head;
    console.dir('I am current head inside', head);

    let reversedList = reverseList(head.next);
    console.dir('I am current head outside', head);

    head.next.next = head;
    head.next = null;
    console.log(reversedList);
    return reversedList;
};
reverseList(head);

module.exports = reverseList;