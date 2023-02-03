/*
  * Below, you are provided the construtors for a doubly linked list as well as a constructor for the nodes it's composed of
  * Construct a doubly linked list & modify it's prototype to contain methods named 'add' and 'remove'
  * The 'add' method should add an additional node to the end of the doubly linked list
  * The 'remove' method should remove the first instance of a node containing a specific value from the doubly linked list
  
  Example doubly linked list
  null <-> 4 <-> 9 <-> 2 <-> 1 <-> null

  Example after using 'add' method to add 6
  null <-> 4 <-> 9 <-> 2 <-> 1 <-> 6 <-> null

  Example after using 'remove' method to remove 2
  null <-> 4 <-> 9 <-> 1 <-> 6 <-> null

  NOTE: must use non-arrow functions for object constructors and prototype methods
  @see: https://dmitripavlutin.com/when-not-to-use-arrow-functions-in-javascript/
*/

function DoublyLinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(val) {
  this.val = val;
  this.next = null;
  this.prev = null;
}

/*
This method should add a node to the end of the doubly linked list
 */
DoublyLinkedList.prototype.add = function (val) {
  const newNode = new Node(val);
  if (!this.head) [this.head, this.tail] = [newNode, newNode];
  else {
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = this.tail.next;
  }

  return this;
};

/*
This method should remove the first instance of a node with the inputted value from the doubly linked list
 */
DoublyLinkedList.prototype.remove = function (val) {
  if (!this.head || !this.head) return;
  let temp = this.head;

  while (temp) {
    if (temp.val === val) {
      if (this.head === temp) {
        this.head = temp.next;
        temp.next = null;
        return this;
      } else if (this.tail === temp) {
        this.tail = temp.perv;
        console.log(temp.prev.val);
        temp.prev = null;
        return this;
      } else {
        temp.prev.next = temp.next;
        temp.next.prev = temp.prev;
        temp.next = null;
        temp.prev = null;
        return this;
      }
    }
    temp = temp.next;
  }
};

const dList = new DoublyLinkedList();
dList.add(1);
dList.add(19);
dList.add(8);
dList.add(6);
dList.add(5);
dList.add(14);
dList.add(12);
dList.add(10);
dList.remove(10);
console.log(dList);

module.exports = { DoublyLinkedList, Node };
