// 4. Evaluate a postfix expression.

const calculatePostfixExpression = (expression) => {
    let stack = [];
    let values = expression.split(" ");

    for (let item of values) {
        if (!isNaN(item)) {
            stack.push(Number(item));
        } else {
            let secondValue = stack.pop();
            let firstValue = stack.pop();

            if (item === "+") {
                stack.push(firstValue + secondValue);
            } else if (item === "-") {
                stack.push(firstValue - secondValue);
            } else if (item === "*") {
                stack.push(firstValue * secondValue);
            } else if (item === "/") {
                stack.push(
                    Math.floor(firstValue / secondValue)
                );
            }
        }
    }
    return stack[0];
}

console.log(calculatePostfixExpression("2 3 1 * + 9 -"));
// Output: -4