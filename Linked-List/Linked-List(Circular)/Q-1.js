// 1. Insert a node in a circular linked list.

class CircularNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

const insertNodeInCircular = (tail, value) => {
    let newNode = new CircularNode(value);

    if (tail === null) {
        newNode.next = newNode;
        return newNode;
    }
    newNode.next = tail.next;
    tail.next = newNode;
    return tail;
}
const printCircularList = (tail) => {
    if (tail === null) {
        console.log("List is Empty");
        return;
    }
    let result = [];
    let current = tail.next;
    do {
        result.push(current.data);
        current = current.next;
    } while (current !== tail.next);
    console.log(result.join(" -> "));
}

let tail = null;

tail = insertNodeInCircular(tail, 10);
tail = insertNodeInCircular(tail, 20);
tail = insertNodeInCircular(tail, 30);

printCircularList(tail);
// Output: 10 -> 30 -> 20