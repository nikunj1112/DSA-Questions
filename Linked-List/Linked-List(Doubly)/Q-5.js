// 5. Remove duplicates from a sorted doubly linked list.

class DoubleNode {

    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

const removeDuplicateNodes = (head) => {
    let currentNode = head;

    while (
        currentNode !== null &&
        currentNode.next !== null
    ) {
        if (
            currentNode.data === currentNode.next.data
        ) {
            let duplicateNode = currentNode.next;
            currentNode.next = duplicateNode.next;
            if (duplicateNode.next !== null) {
                duplicateNode.next.prev = currentNode;
            }
        } else {
            currentNode = currentNode.next;
        }
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
let second = new DoubleNode(10);
let third = new DoubleNode(20);
let fourth = new DoubleNode(20);
let fifth = new DoubleNode(30);

first.next = second;
second.prev = first;

second.next = third;
third.prev = second;

third.next = fourth;
fourth.prev = third;

fourth.next = fifth;
fifth.prev = fourth;


let head = removeDuplicateNodes(first);

printDoublyList(head);
// Output: 10 <-> 20 <-> 30
