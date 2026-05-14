// 3. Implement Insertion Sort.

const performInsertionSort = (numbers) => {
    for (let i = 1; i < numbers.length; i++) {
        let currentValue = numbers[i];
        let previousIndex = i - 1;

        while (
            previousIndex >= 0 &&
            numbers[previousIndex] > currentValue
        ) {
            numbers[previousIndex + 1] =
                numbers[previousIndex];
            previousIndex--;
        }
        numbers[previousIndex + 1] =
            currentValue;
    }
    return numbers;
}
console.log(
    performInsertionSort([12, 11, 13, 5, 6])
);
// Output: [5, 6, 11, 12, 13]
