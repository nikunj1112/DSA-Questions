// 1. Implement a deque using an array.

class MyDeque {

    constructor() {
        this.data = [];
    }

    insertFront(value) {
        this.data.unshift(value);
    }

    insertBack(value) {
        this.data.push(value);
    }

    deleteFront() {

        if (this.isEmpty()) {
            return "Deque is Empty";
        }
        return this.data.shift();
    }

    deleteBack() {

        if (this.isEmpty()) {
            return "Deque is Empty";
        }
        return this.data.pop();
    }

    getFront() {
        return this.data[0];
    }

    getBack() {
        return this.data[this.data.length - 1];
    }

    isEmpty() {
        return this.data.length === 0;
    }

    getSize() {
        return this.data.length;
    }
}


const dq = new MyDeque();

dq.insertFront(10);
dq.insertBack(20);
dq.insertBack(30);

console.log(dq.data);
// Output: [10, 20, 30]

console.log(dq.deleteFront());
// Output: 10

console.log(dq.getFront());
// Output: 20

console.log(dq.getBack());
// Output: 30
