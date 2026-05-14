// 5. Search an element in a rotated sorted array.

const findElementInRotatedArray = (
    numbers,
    targetValue
) => {
    let start = 0;
    let end = numbers.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);
        if (numbers[middle] === targetValue) {
            return middle;
        }

        if (numbers[start] <= numbers[middle]) {
            if (
                targetValue >= numbers[start] &&
                targetValue < numbers[middle]
            ) {
                end = middle - 1;
            } else {
                start = middle + 1;
            }
        } else {

            if (
                targetValue > numbers[middle] &&
                targetValue <= numbers[end]
            ) {
                start = middle + 1;
            } else {
                end = middle - 1;
            }
        }
    }
    return -1;
}

console.log(
    findElementInRotatedArray(
        [4, 5, 6, 7, 0, 1, 2],
        0
    )
);
// Output: 4