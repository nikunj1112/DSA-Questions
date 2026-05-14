// 2. Delete a node from a circular linked list.

class CircularNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

const deleteNodeFromCircular = (tail, value) => {
    if (tail === null) {
        return null;
    }
    let currentNode = tail.next;
    let previousNode = tail;

    do {
        if (currentNode.data === value) {
            if (
                currentNode === tail &&
                currentNode.next === tail
            ) {
                return null;
            }
            previousNode.next = currentNode.next;

            if (currentNode === tail) {
                tail = previousNode;
            }
            return tail;
        }
        previousNode = currentNode;
        currentNode = currentNode.next;
    } while (currentNode !== tail.next);

    return tail;
}


const printCircularList = (tail) => {
    if (tail === null) {
        console.log("List is Empty");
        return;
    }
    let result = [];
    let temp = tail.next;

    do {
        result.push(temp.data);
        temp = temp.next;
    } while (temp !== tail.next);
    console.log(result.join(" -> "));
}

let first = new CircularNode(10);
let second = new CircularNode(20);
let third = new CircularNode(30);

first.next = second;
second.next = third;
third.next = first;

let tail = third;

tail = deleteNodeFromCircular(tail, 20);

printCircularList(tail);
// Output: 10 -> 30
