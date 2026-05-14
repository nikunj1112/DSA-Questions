// 2. Delete a node from a doubly linked list.
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
    insertNode(value) {
        let newNode = new DoubleNode(value);
        if (this.head === null) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = newNode;
        newNode.prev = current;
    }

    deleteNode(value) {

        if (this.head === null) {
            return;
        }
        let current = this.head;
        while (
            current !== null &&
            current.data !== value
        ) {
            current = current.next;
        }
        if (current === null) {
            return;
        }
        if (current.prev !== null) {
            current.prev.next = current.next;
        } else {
            this.head = current.next;
        }
        if (current.next !== null) {
            current.next.prev = current.prev;
        }
    }
    printList() {
        let result = [];
        let temp = this.head;
        while (temp !== null) {
            result.push(temp.data);
            temp = temp.next;
        }
        console.log(result.join(" <-> "));
    }
}


const dll = new DoublyLinkedList();

dll.insertNode(10);
dll.insertNode(20);
dll.insertNode(30);

dll.deleteNode(20);

dll.printList();
// Output: 10 <-> 30