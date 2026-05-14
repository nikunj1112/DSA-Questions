// 1. Insert a node at the beginning of a doubly linked list.

class DoubleNode {

    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
    }

    insertAtStart(value) {
        let newNode = new DoubleNode(value);
        if (this.head === null) {
            this.head = newNode;
            return;
        }

        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
    }

    printList() {
        let result = [];
        let current = this.head;
        while (current !== null) {
            result.push(current.data);
            current = current.next;
        }
        console.log(result.join(" <-> "));
    }
}

const dll = new DoublyLinkedList();

dll.insertAtStart(30);
dll.insertAtStart(20);
dll.insertAtStart(10);

dll.printList();
// Output: 10 <-> 20 <-> 30