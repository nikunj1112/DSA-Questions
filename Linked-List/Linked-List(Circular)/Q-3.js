// 3. Traverse a circular linked list.

class CircularNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

const traverseCircularList = (head) => {
    if (head === null) {
        return;
    }
    let currentNode = head;
    let result = [];
    do {
        result.push(currentNode.data);
        currentNode = currentNode.next;
    } while (currentNode !== head);
    console.log(result.join(" -> "));
}

let first = new CircularNode(10);
let second = new CircularNode(20);
let third = new CircularNode(30);

first.next = second;
second.next = third;
third.next = first;


traverseCircularList(first);
// Output: 10 -> 20 -> 30