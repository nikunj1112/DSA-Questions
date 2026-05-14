// 2. Implement preorder traversal.

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

const preorderTraversal = (root, result = []) => {
    if (root === null) return result;
    result.push(root.data);
    preorderTraversal(root.left, result);
    preorderTraversal(root.right, result);

    return result;
}


let root = new Node(1);

root.left = new Node(2);
root.right = new Node(3);

root.left.left = new Node(4);
root.left.right = new Node(5);


console.log(preorderTraversal(root));
// Output: [1, 2, 4, 5, 3]