// 3. Find the middle of a linked list.

class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

const getMiddleNode = (head) => {
    let slowPointer = head;
    let fastPointer = head;

    while (
        fastPointer !== null &&
        fastPointer.next !== null
    ) {
        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next.next;
    }
    return slowPointer.data;
}

let first = new ListNode(10);
let second = new ListNode(20);
let third = new ListNode(30);
let fourth = new ListNode(40);
let fifth = new ListNode(50);

first.next = second;
second.next = third;
third.next = fourth;
fourth.next = fifth;


console.log(getMiddleNode(first));
// Output: 30