// 4. Find the maximum subarray sum (Kadane's Algorithm)

const findMaxSubarray = (numbers) => {

    let maximumSum = numbers[0];
    let currentSum = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        currentSum = Math.max(numbers[i], currentSum + numbers[i]);
        maximumSum = Math.max(maximumSum, currentSum);
    }

    return maximumSum;
}

console.log(findMaxSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
// Output: 6