// 4. Split a circular linked list into two halves.

class CircularNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
const splitCircularList = (head) => {
    let slowPointer = head;
    let fastPointer = head;

    while (
        fastPointer.next !== head &&
        fastPointer.next.next !== head
    ) {
        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next.next;
    }
    if (fastPointer.next.next === head) {
        fastPointer = fastPointer.next;
    }
    let firstHalfHead = head;
    let secondHalfHead = slowPointer.next;
    fastPointer.next = secondHalfHead;
    slowPointer.next = firstHalfHead;
    return [firstHalfHead, secondHalfHead];
}
const printCircularList = (head) => {
    let result = [];
    let current = head;
    do {

        result.push(current.data);
        current = current.next;
    } while (current !== head);
    console.log(result.join(" -> "));
}

let first = new CircularNode(10);
let second = new CircularNode(20);
let third = new CircularNode(30);
let fourth = new CircularNode(40);

first.next = second;
second.next = third;
third.next = fourth;
fourth.next = first;

let halves = splitCircularList(first);
console.log("First Half:");
printCircularList(halves[0]);
// Output: 10 -> 20

console.log("Second Half:");
printCircularList(halves[1]);
// Output: 30 -> 40