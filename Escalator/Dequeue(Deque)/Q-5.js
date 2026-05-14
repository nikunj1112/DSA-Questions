// 5. Design a sliding window minimum problem using deque.

const findSlidingWindowMinimum = (numbers, windowSize) => {

    let answer = [];
    let dq = [];

    for (let i = 0; i < numbers.length; i++) {

        if (dq.length > 0 && dq[0] < i - windowSize + 1) {
            dq.shift();
        }
        while (
            dq.length > 0 &&
            numbers[dq[dq.length - 1]] > numbers[i]
        ) {
            dq.pop();
        }

        dq.push(i);

        if (i >= windowSize - 1) {
            answer.push(numbers[dq[0]]);
        }
    }

    return answer;
}

console.log(findSlidingWindowMinimum([4, 2, 12, 3, 5, 1, 6], 3));
// Output: [2, 2, 3, 1, 1]