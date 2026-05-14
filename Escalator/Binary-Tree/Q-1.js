// 1. Implement inorder traversal (recursive and iterative).

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

const inorderRecursive = (root, answer = []) => {
    if (root === null) return answer;
    inorderRecursive(root.left, answer);
    answer.push(root.data);
    inorderRecursive(root.right, answer);

    return answer;
}


const inorderIterative = (root) => {

    let result = [];
    let stack = [];
    let currentNode = root;

    while (currentNode || stack.length > 0) {

        while (currentNode) {
            stack.push(currentNode);
            currentNode = currentNode.left;
        }

        currentNode = stack.pop();
        result.push(currentNode.data);
        currentNode = currentNode.right;
    }

    return result;
}


let root = new Node(1);

root.left = new Node(2);
root.right = new Node(3);

root.left.left = new Node(4);
root.left.right = new Node(5);


console.log(inorderRecursive(root));
// Output: [4, 2, 5, 1, 3]

console.log(inorderIterative(root));
// Output: [4, 2, 5, 1, 3]

