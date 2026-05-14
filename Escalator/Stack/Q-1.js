// 1. Implement a stack using an array.

class MyStack {

    constructor() {
        this.data = [];
    }

    pushElement(value) {
        this.data.push(value);
    }

    popElement() {
        if (this.checkEmpty()) {
            return "Stack is Empty";
        }
        return this.data.pop();
    }

    topElement() {
        if (this.checkEmpty()) {
            return "Stack is Empty";
        }
        return this.data[this.data.length - 1];
    }

    checkEmpty() {
        return this.data.length === 0;
    }

    getSize() {
        return this.data.length;
    }
}

const st = new MyStack();

st.pushElement(10);
st.pushElement(20);
st.pushElement(30);

console.log(st.topElement());
// Output: 30

console.log(st.popElement());
// Output: 30

console.log(st.getSize());
// Output: 2