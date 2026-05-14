// 5. Find the next greater element for each element in an array.

const findNextGreaterElements = (numbers) => {
    let answer = new Array(numbers.length).fill(-1);
    let stack = [];

    for (let i = 0; i < numbers.length; i++) {
        while (
            stack.length > 0 &&
            numbers[i] > numbers[stack[stack.length - 1]]
        ) {
            let index = stack.pop();
            answer[index] = numbers[i];
        }
        stack.push(i);
    }
    return answer;
}

console.log(findNextGreaterElements([4, 5, 2, 10]));
// Output: [5, 10, 10, -1]
