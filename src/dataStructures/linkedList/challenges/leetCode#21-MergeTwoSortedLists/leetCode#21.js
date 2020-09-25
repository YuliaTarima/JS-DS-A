// Merge two sorted linked lists and return it as a new sorted list.
// The new list should be made
// by splicing together the nodes of the first two lists.
//
//Example:
// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4

// /**
//  * Definition for singly-linked list.
//  * function ListNode(val, next) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.next = (next===undefined ? null : next)
//  * }
//  */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// Runtime: 88 ms, faster than 67.83% of JavaScript online submissions for Merge Two Sorted Lists.
// Memory Usage: 38.7 MB, less than 43.03% of JavaScript online submissions for Merge Two Sorted Lists.
//
const mergeTwoLists = function(l1, l2) {

    const result = new ListNode();
    let curr = result;

    while(l1 && l2) {
        if(l1.val < l2.val) {
            curr.next = l1;
            l1 = l1.next;
        } else {
            curr.next = l2;
            l2 = l2.next;
        }
        curr = curr.next;
    }
//curr.next = l1 || l2;
    while(l1) {
        curr.next = l1;
        l1 = l1.next;
        curr = curr.next;
    }

    while(l2) {
        curr.next = l2;
        l2 = l2.next;
        curr = curr.next;
    }

    return result.next;
}