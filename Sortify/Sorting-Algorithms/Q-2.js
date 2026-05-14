// 2. Implement Selection Sort.

const performSelectionSort = (numbers) => {
    let size = numbers.length;
    for (let i = 0; i < size - 1; i++) {
        let minimumIndex = i;

        for (let j = i + 1; j < size; j++) {
            if (numbers[j] < numbers[minimumIndex]) {
                minimumIndex = j;
            }
        }
        if (minimumIndex !== i) {
            [numbers[i], numbers[minimumIndex]] =
            [numbers[minimumIndex], numbers[i]];
        }
    }
    return numbers;
}
console.log(
    performSelectionSort([64, 25, 12, 22, 11])
);
// Output: [11, 12, 22, 25, 64]