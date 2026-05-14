// 3. Remove duplicates from a sorted array in-place.


const removeDuplicate = (numbers) => {

    if (numbers.length === 0) return 0;
    let uniqueIndex = 0;

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] !== numbers[uniqueIndex]) {
            uniqueIndex++;
            numbers[uniqueIndex] = numbers[i];
        }
    }

    return uniqueIndex + 1;
}

console.log(removeDuplicate([1, 1, 2, 2, 3, 4, 4]));
// Output: 4