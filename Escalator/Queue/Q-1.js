// 1. Implement a queue using an array.

class MyQueue {

    constructor() {
        this.data = [];
    }

    insert(value) {
        this.data.push(value);
    }

    remove() {
        if (this.checkEmpty()) {
            return "Queue is Empty";
        }
        return this.data.shift();
    }

    getFront() {
        if (this.checkEmpty()) {
            return "Queue is Empty";
        }
        return this.data[0];
    }

    checkEmpty() {
        return this.data.length === 0;
    }

    getSize() {
        return this.data.length;
    }
}

const q = new MyQueue();

q.insert(10);
q.insert(20);
q.insert(30);

console.log(q.getFront());
// Output: 10

console.log(q.remove());
// Output: 10

console.log(q.getSize());
// Output: 2
