// 3. Implement postorder traversal.

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}


const postorderTraversal = (root, result = []) => {

    if (root === null) return result;
    postorderTraversal(root.left, result);
    postorderTraversal(root.right, result);
    result.push(root.data);

    return result;
}


let root = new Node(1);

root.left = new Node(2);
root.right = new Node(3);

root.left.left = new Node(4);
root.left.right = new Node(5);


console.log(postorderTraversal(root));
// Output: [4, 5, 2, 3, 1]