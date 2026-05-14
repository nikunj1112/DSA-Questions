// 2. Implement a deque using a doubly linked list.
class DequeNode {

    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}


class DoubleEndedQueue {

    constructor() {
        this.front = null;
        this.back = null;
        this.size = 0;
    }

    
    insertFront(value) {
        let newNode = new DequeNode(value);
        if (this.front === null) {
            this.front = this.back = newNode;
        } else {
            newNode.next = this.front;
            this.front.prev = newNode;
            this.front = newNode;
        }
        this.size++;
    }


    insertBack(value) {
        let newNode = new DequeNode(value);
        if (this.back === null) {
            this.front = this.back = newNode;
        } else {
            newNode.prev = this.back;
            this.back.next = newNode;
            this.back = newNode;
        }
        this.size++;
    }

    deleteFront() {

        if (this.front === null) {
            return "Deque is Empty";
        }
        let removedValue = this.front.data;
        this.front = this.front.next;
        if (this.front) {
            this.front.prev = null;
        } else {
            this.back = null;
        }
        this.size--;
        return removedValue;
    }

    deleteBack() {

        if (this.back === null) {
            return "Deque is Empty";
        }
        let removedValue = this.back.data;
        this.back = this.back.prev;
        if (this.back) {
            this.back.next = null;
        } else {
            this.front = null;
        }
        this.size--;
        return removedValue;
    }

    checkEmpty() {
        return this.size === 0;
    }
}


const dq = new DoubleEndedQueue();

dq.insertFront(10);
dq.insertBack(20);
dq.insertBack(30);

console.log(dq.deleteFront());
// Output: 10

console.log(dq.deleteBack());
// Output: 30

console.log(dq.checkEmpty());
// Output: false