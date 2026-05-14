// 4. Remove the nth node from the end.

class ListNode {

    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

const removeNodeFromEnd = (head, position) => {
    let dummyNode = new ListNode(0);
    dummyNode.next = head;
    let fastPointer = dummyNode;
    let slowPointer = dummyNode;

    for (let i = 0; i <= position; i++) {
        fastPointer = fastPointer.next;
    }
    while (fastPointer !== null) {
        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next;
    }

    slowPointer.next = slowPointer.next.next;
    return dummyNode.next;
}

const printLinkedList = (head) => {
    let result = [];
    let current = head;

    while (current !== null) {
        result.push(current.data);
        current = current.next;
    }
    console.log(result.join(" -> "));
}

let first = new ListNode(10);
let second = new ListNode(20);
let third = new ListNode(30);
let fourth = new ListNode(40);

first.next = second;
second.next = third;
third.next = fourth;

let newHead = removeNodeFromEnd(first, 2);

printLinkedList(newHead);
// Output: 10 -> 20 -> 40