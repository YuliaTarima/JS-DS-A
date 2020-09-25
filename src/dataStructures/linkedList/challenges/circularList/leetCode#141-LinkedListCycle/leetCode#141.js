// Given head, the head of a linked list,
// determine if the linked list has a cycle in it.
//
// There is a cycle in a linked list
// if there is some node in the list
// that can be reached again by continuously following the next pointer.
//
// Internally, pos is used to denote the index of the node
// that tail's next pointer is connected to.
// Note that pos is not passed as a parameter.
//
// Return true if there is a cycle in the linked list.
// Otherwise, return false.

// /**
//  * Definition for singly-linked list.
//  * function ListNode(val) {
//  *     this.val = val;
//  *     this.next = null;
//  * }
//  */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

// Runtime: 84 ms, faster than 66.36% of JavaScript online submissions for Linked List Cycle.
// Memory Usage: 38.9 MB, less than 96.10% of JavaScript online submissions for Linked List Cycle.
const hasCycle = (head) => {

    if (!head || !head.next) return false;
    let slow = head;
    let fast = head

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next
        if (slow === fast) return true;
    }
    return false;
};