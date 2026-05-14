// 4. Find the last occurrence of a target element in a sorted array.

const findLastOccurrence = (numbers, targetValue) => {
    let start = 0;
    let end = numbers.length - 1;
    let answer = -1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);
        if (numbers[middle] === targetValue) {
            answer = middle;
            start = middle + 1;
        } else if (numbers[middle] < targetValue) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }
    return answer;
}

console.log(
    findLastOccurrence(
        [1, 2, 2, 2, 3, 4],
        2
    )
);
// Output: 3