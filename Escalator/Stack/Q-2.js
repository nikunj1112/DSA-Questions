// 2. Implement a stack using a linked list.

class StackNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedListStack {

    constructor() {
        this.head = null;
        this.size = 0;
    }

    pushElement(value) {
        let newNode = new StackNode(value);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }

    popElement() {
        if (this.head === null) {
            return "Stack is Empty";
        }
        let removedValue = this.head.data;
        this.head = this.head.next;
        this.size--;
        return removedValue;
    }

    topElement() {
        if (this.head === null) {
            return "Stack is Empty";
        }
        return this.head.data;
    }

    checkEmpty() {
        return this.size === 0;
    }
}

const st = new LinkedListStack();

st.pushElement(10);
st.pushElement(20);
st.pushElement(30);

console.log(st.topElement());
// Output: 30

console.log(st.popElement());
// Output: 30

console.log(st.checkEmpty());
// Output: false