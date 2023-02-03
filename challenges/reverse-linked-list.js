function Node(value) {
  this.value = value;
  this.next = null;
}

/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 * If the input is null, your function should return null
 *
 * Example:
 * If the linked list is:
 *
 *      1 -> 2 -> 3 -> 4 -> 5
 *
 * The result should like like:
 *
 *      5 -> 4 -> 3 -> 2 -> 1
 *
 * Extension:
 * Do it in place
 *
 */

const reverseLinkedList = (head) => {
  if (!head || !head.next) return head;
  let after = null;
  let mid = head;
  let before = null;

  while (mid) {
    after = mid.next;
    mid.next = before;
    before = mid;
    mid = after;
  }

  head = before;
  return head;
};

module.exports = { Node, reverseLinkedList };
