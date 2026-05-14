// 2. Detect a cycle in a linked list.

class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

const detectCycle = (head) => {
    let slowPointer = head;
    let fastPointer = head;

    while (
        fastPointer !== null &&
        fastPointer.next !== null
    ) {
        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next.next;
        if (slowPointer === fastPointer) {
            return true;
        }
    }
    return false;
}

let first = new ListNode(10);
let second = new ListNode(20);
let third = new ListNode(30);
let fourth = new ListNode(40);

first.next = second;
second.next = third;
third.next = fourth;


fourth.next = second;

console.log(detectCycle(first));
// Output: true
