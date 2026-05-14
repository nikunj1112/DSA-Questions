// 1. Implement Bubble Sort.

const performBubbleSort = (numbers) => {
    let size = numbers.length;
    for (let i = 0; i < size - 1; i++) {
        let isSwapped = false;
        for (let j = 0; j < size - i - 1; j++) {
            if (numbers[j] > numbers[j + 1]) {
                [numbers[j], numbers[j + 1]] =
                [numbers[j + 1], numbers[j]];
                isSwapped = true;
            }
        }
        if (!isSwapped) {
            break;
        }
    }
    return numbers;
}

console.log(
    performBubbleSort([5, 2, 8, 1, 3])
);
// Output: [1, 2, 3, 5, 8]
