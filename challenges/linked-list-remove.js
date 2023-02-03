/*
Write a function to delete the first instance of a node in a singly linked list.
The function should return the deleted node, or undefined if the value was not found.

Example: 
Given a linked list:
 
('a' -> 'b' -> 'c' -> 'b' -> 'd')
 
And given a value, 'b', the linked list after calling your function should look like:

('a' -> 'c' -> 'b' -> 'd')

And the evaluated result would be the removed node with the value of 'b'.

How might you remove a linked list value without adding extra properties to the constructor functions?

*/

// NOTE: needs to be es5 function definition
function LinkedList() {
  this.head = null;
}

// NOTE: needs to be es5 function definition
function Node(val) {
  this.val = val;
  this.next = null;
}

const linkedListRemove = (ll, val) => {
  if (!ll) return undefined;
  let prev = ll.head;
  let curr = prev.next;

  if ((prev.val = val)) {
    ll.head = ll.head.next;
    prev.next = null;
    return prev;
  }

  while (curr) {
    if ((curr.val = val)) {
      prev.next = curr.next;
      curr.next = null;
      return curr;
    }
    prev = curr;
    curr = curr.next;
  }

  return undefined;
};

/*
Extension: 
* Write a function to delete the first instance of a node in a singly linked list with a space complexity of O(1). 
* Write a function to delete the all instances of a node in a singly linked list.

Example: 
Given a linked list:
 
('a' -> 'b' -> 'd' -> 'c' -> 'd')
 
 And given a value, 'd', the evaluated result of calling your function should be:

 ('a' -> 'b' -> 'c')

*/

const linkedListRemoveMultiple = (ll, val) => {};

module.exports = {
  LinkedList,
  Node,
  linkedListRemove,
  linkedListRemoveMultiple,
};
