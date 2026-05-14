// 1. Implement Binary Search using iteration.

const binarySearch = (numbers, targetValue) => {
    let start = 0;
    let end = numbers.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);
        if (numbers[middle] === targetValue) {
            return middle;
        } else if (numbers[middle] < targetValue) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }
    return -1;
}

console.log(binarySearch([10, 20, 30, 40, 50], 30));
// Output: 2
