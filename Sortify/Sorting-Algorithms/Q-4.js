// 4. Implement Merge Sort.

const performMergeSort = (numbers) => {
    if (numbers.length <= 1) {
        return numbers;
    }
    let middle =
        Math.floor(numbers.length / 2);
    let leftArray =
        performMergeSort(
            numbers.slice(0, middle)
        );
    let rightArray =
        performMergeSort(
            numbers.slice(middle)
        );
    return mergeArrays(leftArray, rightArray);
}
const mergeArrays = (
    leftPart,
    rightPart
) => {
    let sortedArray = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while (
        leftIndex < leftPart.length &&
        rightIndex < rightPart.length
    ) {
        if (
            leftPart[leftIndex] <=
            rightPart[rightIndex]
        ) {
            sortedArray.push(
                leftPart[leftIndex]
            );
            leftIndex++;
        } else {
            sortedArray.push(
                rightPart[rightIndex]
            );
            rightIndex++;
        }
    }
    return sortedArray
        .concat(leftPart.slice(leftIndex))
        .concat(rightPart.slice(rightIndex));
}
console.log(
    performMergeSort([38, 27, 43, 3, 9, 82, 10])
);
// Output: [3, 9, 10, 27, 38, 43, 82]