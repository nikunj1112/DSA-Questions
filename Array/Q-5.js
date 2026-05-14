// 5. Merge two sorted arrays without using extra space

const mergeArrays = (firstArray, secondArray) => {

    let left = firstArray.length - 1;
    let right = 0;

    while (left >= 0 && right < secondArray.length) {

        if (firstArray[left] > secondArray[right]) {
            [firstArray[left], secondArray[right]] =
            [secondArray[right], firstArray[left]];
        }

        left--;
        right++;
    }

    firstArray.sort((a, b) => a - b);
    secondArray.sort((a, b) => a - b);

    return [firstArray, secondArray];
}

console.log(mergeArrays([1, 3, 5], [2, 4, 6]));
// Output: [[1, 2, 3], [4, 5, 6]]