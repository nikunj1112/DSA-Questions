// 5. Implement Quick Sort.

const quickSortArray = (
    numbers,
    start = 0,
    end = numbers.length - 1
) => {
    if (start < end) {
        let pivotIndex =
            arrangePivot(numbers, start, end);
        quickSortArray(
            numbers,
            start,
            pivotIndex - 1
        );
        quickSortArray(
            numbers,
            pivotIndex + 1,
            end
        );
    }
    return numbers;
}

const arrangePivot = (
    numbers,
    start,
    end
) => {
    let pivotValue = numbers[end];
    let smallerIndex = start - 1;
    for (let i = start; i < end; i++) {
        if (numbers[i] < pivotValue) {
            smallerIndex++;
            [numbers[smallerIndex], numbers[i]] =
            [numbers[i], numbers[smallerIndex]];
        }
    }

    [numbers[smallerIndex + 1], numbers[end]] =
    [numbers[end], numbers[smallerIndex + 1]];

    return smallerIndex + 1;
}

console.log(
    quickSortArray([8, 4, 2, 9, 1, 5])
);
// Output: [1, 2, 4, 5, 8, 9]
