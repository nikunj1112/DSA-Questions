// 5. Merge two sorted linked lists.

class ListNode {

    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

const mergeSortedLinkedLists = (list1, list2) => {
    let dummyNode = new ListNode(0);
    let currentNode = dummyNode;

    while (list1 !== null && list2 !== null) {
        if (list1.data <= list2.data) {
            currentNode.next = list1;
            list1 = list1.next;
        } else {
            currentNode.next = list2;
            list2 = list2.next;
        }
        currentNode = currentNode.next;
    }
    currentNode.next = list1 || list2;
    return dummyNode.next;
}

const printLinkedList = (head) => {
    let result = [];
    let temp = head;
    while (temp !== null) {
        result.push(temp.data);
        temp = temp.next;
    }
    console.log(result.join(" -> "));
}

let first1 = new ListNode(10);
let second1 = new ListNode(20);
let third1 = new ListNode(40);

first1.next = second1;
second1.next = third1;

let first2 = new ListNode(15);
let second2 = new ListNode(25);
let third2 = new ListNode(30);

first2.next = second2;
second2.next = third2;

let mergedHead =
    mergeSortedLinkedLists(first1, first2);

printLinkedList(mergedHead);
// Output: 10 -> 15 -> 20 -> 25 -> 30 -> 40