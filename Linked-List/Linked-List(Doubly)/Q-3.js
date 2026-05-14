// 3. Reverse a doubly linked list.
class DoubleNode {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

const reverseDoublyLinkedList = (head) => {
    let currentNode = head;
    let temporaryNode = null;

    while (currentNode !== null) {
        temporaryNode = currentNode.prev;
        currentNode.prev = currentNode.next;
        currentNode.next = temporaryNode;
        currentNode = currentNode.prev;
    }
    if (temporaryNode !== null) {
        head = temporaryNode.prev;
    }
    return head;
}

const printDoublyList = (head) => {
    let result = [];
    let temp = head;
    while (temp !== null) {
        result.push(temp.data);
        temp = temp.next;
    }
    console.log(result.join(" <-> "));
}

let first = new DoubleNode(10);
let second = new DoubleNode(20);
let third = new DoubleNode(30);

first.next = second;
second.prev = first;

second.next = third;
third.prev = second;


let newHead = reverseDoublyLinkedList(first);

printDoublyList(newHead);
// Output: 30 <-> 20 <-> 10