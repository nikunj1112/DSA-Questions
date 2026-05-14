// 2. Implement Binary Search using recursion.

const recursiveBinarySearch = (
    numbers,
    targetValue,
    start = 0,
    end = numbers.length - 1
) => {
    if (start > end) {
        return -1;
    }

    let middle = Math.floor((start + end) / 2);
    if (numbers[middle] === targetValue) {
        return middle;
    } else if (numbers[middle] < targetValue) {
        return recursiveBinarySearch(
            numbers,
            targetValue,
            middle + 1,
            end
        );
    } else {
        return recursiveBinarySearch(
            numbers,
            targetValue,
            start,
            middle - 1
        );
    }
}

console.log(
    recursiveBinarySearch(
        [10, 20, 30, 40, 50],
        40
    )
);
// Output: 3