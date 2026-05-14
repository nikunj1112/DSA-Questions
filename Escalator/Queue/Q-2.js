// 2. Implement a queue using two stacks.

class QueueWithStacks {

    constructor() {
        this.inputStack = [];
        this.outputStack = [];
    }

    insert(value) {
        this.inputStack.push(value);
    }

    remove() {
        if (this.outputStack.length === 0) {
            while (this.inputStack.length > 0) {
                this.outputStack.push(
                    this.inputStack.pop()
                );
            }
        }
        if (this.outputStack.length === 0) {
            return "Queue is Empty";
        }
        return this.outputStack.pop();
    }

    getFront() {
        if (this.outputStack.length === 0) {
            while (this.inputStack.length > 0) {
                this.outputStack.push(
                    this.inputStack.pop()
                );
            }
        }
        return this.outputStack[
            this.outputStack.length - 1
        ];
    }

    checkEmpty() {
        return (
            this.inputStack.length === 0 &&
            this.outputStack.length === 0
        );
    }
}

const q = new QueueWithStacks();

q.insert(10);
q.insert(20);
q.insert(30);

console.log(q.getFront());
// Output: 10

console.log(q.remove());
// Output: 10

console.log(q.checkEmpty());
// Output: false
