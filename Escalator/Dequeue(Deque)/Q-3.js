// 3. Find maximum of all subarrays of size k.

const findMaximumSubarrays = (numbers, windowSize) => {

    let result = [];
    let dq = [];

    for (let i = 0; i < numbers.length; i++) {

        if (dq.length > 0 && dq[0] < i - windowSize + 1) {
            dq.shift();
        }
        while (
            dq.length > 0 &&
            numbers[dq[dq.length - 1]] < numbers[i]
        ) {
            dq.pop();
        }
        dq.push(i);

        if (i >= windowSize - 1) {
            result.push(numbers[dq[0]]);
        }
    }
    return result;
}


console.log(findMaximumSubarrays([1, 3, -1, -3, 5, 3, 6, 7], 3));
// Output: [3, 3, 5, 5, 6, 7]
