// 3. Check if parentheses are balanced in a string.

const checkBalancedParentheses = (text) => {
    let stack = [];
    let openingBrackets = "({[";
    let closingBrackets = ")}]";

    let bracketPairs = {
        ")": "(",
        "}": "{",
        "]": "["
    };

    for (let char of text) {
        if (openingBrackets.includes(char)) {
            stack.push(char);
        } else if (closingBrackets.includes(char)) {
            if (stack.pop() !== bracketPairs[char]) {
                return false;
            }
        }
    }
    return stack.length === 0;
}

console.log(checkBalancedParentheses("{[()]}"));
// Output: true
