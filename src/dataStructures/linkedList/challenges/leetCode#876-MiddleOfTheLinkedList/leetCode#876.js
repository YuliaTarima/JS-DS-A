// https://leetcode.com/problems/middle-of-the-linked-list/
//
// Given a non-empty, singly linked list with head node head,
// return a middle node of linked list.
// If there are two middle nodes, return the second middle node.

// /**
//  * Definition for singly-linked list.
//  * function ListNode(val, next) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.next = (next===undefined ? null : next)
//  * }
//  */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// Runtime: 76 ms, faster than 52.72% of JavaScript online submissions for
// Middle of the Linked List.
// Memory Usage: 36.5 MB, less than 75.18% of JavaScript online submissions for Middle of the Linked List.
const middleNode = (head) => {

    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}