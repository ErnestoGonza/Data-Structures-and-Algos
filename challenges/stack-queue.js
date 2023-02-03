/**
 * 
 * First, create a Stack which contains the following methods:
 * - push: add value to top (end) of stack
 * - pop: remove value from top (end) of stack
 * 
 * Second, create a Queue which consists of two stacks: stack1 and stack2
 * and contains the following methods:
 * - enqueue: add value to queue
 * - dequeue: remove value from queue
 * Queue methods should follow First In, First Out rule.
 * 
 * DO NOT USE NATIVE JS METHODS
 * 
 */

class Stack {
    constructor() {
        this.stack = {};
        this.length = 0;
    }

    pop() {
        if(!this.length) return;
        this.length--;
        const toDelete = this.stack[this.length];
        delete this.stack[this.length];
        return toDelete;
    }

    push(...args) {
        args.forEach((el) => {
            this.stack[this.length] = el;
            this.length++;
        })
        return this.length;
    }
}


// function Node(val) {
//     this.val = val;
//     this.next = null;
// }
// class Queue {
//     constructor() {
//         this.head = null;
//         this.tail = null;
//     }

//     enqueue(val) {
//         const newNode = new Node(val);
//         if(!this.head) {
//             this.head = newNode;
//             this.tail = this.head;
//             return this;
//         }
//         this.tail.next = newNode;
//         this.tail = newNode;
//         return this;
//     }

//     dequeue() {
//         if(!this.head) return undefined;
//         if(!this.head.next) {
//             this.head = null;
//             this.tail = null;
//         }

//         const dummy = this.head;
//         this.head = this.head.next;
//         dummy.next = null;
//         return this;
//     }
// }

class Queue {
    constructor() {
        this.stack = {};
        this.length = 0
    }

    enqueue(...args) {
        if(!args.length) return undefined;
        args.forEach((el) => {
            this.stack[this.length] = el;
            this.length++;
        })
    }

    dequeue() {
        for(let key in this.stack) {
            this.stack[key - 1] = this.stack[key];
        }
        const toDelete = this.stack[-1];
        this.length--;
        delete this.stack[this.length];
        delete this.stack[-1]
        return toDelete;
    }
}

module.exports = { Stack, Queue };
