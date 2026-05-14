// 4. Implement a circular queue.
class MyCircularQueue {

    constructor(capacity) {

        this.capacity = capacity;
        this.items = new Array(capacity);
        this.front = -1;
        this.rear = -1;
    }


    checkFull() {
        return (this.rear + 1) % this.capacity === this.front;
    }
    checkEmpty() {
        return this.front === -1;
    }
    insert(value) {

        if (this.checkFull()) {
            return "Queue is Full";
        }
        if (this.checkEmpty()) {
            this.front = 0;
        }
        this.rear = (this.rear + 1) % this.capacity;
        this.items[this.rear] = value;
    }
    remove() {

        if (this.checkEmpty()) {
            return "Queue is Empty";
        }
        let deletedValue = this.items[this.front];
        if (this.front === this.rear) {
            this.front = -1;
            this.rear = -1;
        } else {
            this.front = (this.front + 1) % this.capacity;
        }
        return deletedValue;
    }
    getFront() {
        if (this.checkEmpty()) {
            return "Queue is Empty";
        }
        return this.items[this.front];
    }
}


const cq = new MyCircularQueue(3);

cq.insert(10);
cq.insert(20);
cq.insert(30);

console.log(cq.getFront());
// Output: 10

console.log(cq.remove());
// Output: 10

console.log(cq.getFront());
// Output: 20