// 1. Reverse a singly linked list.

class ListNode {

    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

const reverseSinglyLinkedList = (head) => {
    let previousNode = null;
    let currentNode = head;

    while (currentNode !== null) {
        let nextNode = currentNode.next;
        currentNode.next = previousNode;
        previousNode = currentNode;
        currentNode = nextNode;
    }
    return previousNode;
}

const printLinkedList = (head) => {
    let result = [];
    let temp = head;
    while (temp !== null) {
        result.push(temp.data);
        temp = temp.next;
    }
    console.log(result.join(" -> "));
}

let first = new ListNode(10);
let second = new ListNode(20);
let third = new ListNode(30);

first.next = second;
second.next = third;

let reversedHead = reverseSinglyLinkedList(first);

printLinkedList(reversedHead);
// Output: 30 -> 20 -> 10
