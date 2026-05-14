// 2. Rotate an array to the right by k steps.


const rightRotate = (numbers, steps) => {

    steps = steps % numbers.length;
    const reverseArray = (left, right) => {

        while (left < right) {
            [numbers[left], numbers[right]] =
            [numbers[right], numbers[left]];

            left++;
            right--;
        }
    }
    reverseArray(0, numbers.length - 1);
    reverseArray(0, steps - 1);
    reverseArray(steps, numbers.length - 1);

    return numbers;
}

console.log(rightRotate([1, 2, 3, 4, 5], 2));
// Output: [4, 5, 1, 2, 3]