// 4. Find all pairs with a given sum in a sorted doubly linked list.

class DoubleNode {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

const findPairs = (head, targetSum) => {
    let tail = head;
    while (tail.next !== null) {
        tail = tail.next;
    }

    let leftPointer = head;
    let rightPointer = tail;
    let result = [];

    while (
        leftPointer !== rightPointer &&
        rightPointer.next !== leftPointer
    ) {
        let currentSum =
            leftPointer.data + rightPointer.data;
        if (currentSum === targetSum) {
            result.push([
                leftPointer.data,
                rightPointer.data
            ]);
            leftPointer = leftPointer.next;
            rightPointer = rightPointer.prev;

        } else if (currentSum < targetSum) {
            leftPointer = leftPointer.next;
        } else {
            rightPointer = rightPointer.prev;
        }
    }
    return result;
}

let first = new DoubleNode(1);
let second = new DoubleNode(2);
let third = new DoubleNode(4);
let fourth = new DoubleNode(5);
let fifth = new DoubleNode(6);

first.next = second;
second.prev = first;

second.next = third;
third.prev = second;

third.next = fourth;
fourth.prev = third;

fourth.next = fifth;
fifth.prev = fourth;


console.log(findPairs(first, 7));
// Output: [[1, 6], [2, 5]]