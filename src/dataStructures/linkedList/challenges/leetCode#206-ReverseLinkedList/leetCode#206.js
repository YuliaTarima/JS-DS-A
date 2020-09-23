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
const reverseList = function(head) {

    let prev = null; // the tail

    while (head) {
        // move nextNode one level up
        const nextNode = head.next;

        // point head's .next to the prev (null for first iteration)
        head.next = prev;

        // move prev one level up
        prev = head;

        // move head one level up
        head = nextNode;
    }

    return prev
};
module.exports = reverseList;