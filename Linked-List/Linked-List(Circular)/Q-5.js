// 5. Detect if a linked list is circular.

class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

const checkCircularLinkedList = (head) => {
    if (head === null) {
        return false;
    }
    let currentNode = head.next;
    while (
        currentNode !== null &&
        currentNode !== head
    ) {
        currentNode = currentNode.next;
    }
    return currentNode === head;
}
let first = new ListNode(10);
let second = new ListNode(20);
let third = new ListNode(30);

first.next = second;
second.next = third;
third.next = first;


console.log(checkCircularLinkedList(first));
// Output: true