// 4. Find the height of a binary tree.

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

const findTreeHeight = (root) => {

    if (root === null) return 0;
    let leftSideHeight = findTreeHeight(root.left);
    let rightSideHeight = findTreeHeight(root.right);

    return 1 + Math.max(leftSideHeight, rightSideHeight);
}


let root = new Node(1);

root.left = new Node(2);
root.right = new Node(3);

root.left.left = new Node(4);
root.left.right = new Node(5);


console.log(findTreeHeight(root));
// Output: 3