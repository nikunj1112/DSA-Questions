// 4. Check if a string is a palindrome using deque.

const checkPalindrome = (text) => {

    let deque = text.toLowerCase().split("");

    while (deque.length > 1) {
        let firstChar = deque.shift();
        let lastChar = deque.pop();
        if (firstChar !== lastChar) {
            return false;
        }
    }

    return true;
}

console.log(checkPalindrome("madam"));
// Output: true