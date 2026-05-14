// 5. Check if a binary tree is balanced.

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}


const checkBalancedTree = (root) => {

    const findHeight = (node) => {
        if (node === null) return 0;
        let leftHeight = findHeight(node.left);

        if (leftHeight === -1) return -1;
        let rightHeight = findHeight(node.right);

        if (rightHeight === -1) return -1;

        if (Math.abs(leftHeight - rightHeight) > 1) {
            return -1;
        }
        return 1 + Math.max(leftHeight, rightHeight);
    }

    return findHeight(root) !== -1;
}


let root = new Node(1);

root.left = new Node(2);
root.right = new Node(3);

root.left.left = new Node(4);
root.left.left.left = new Node(5);


console.log(checkBalancedTree(root));
// Output: false
