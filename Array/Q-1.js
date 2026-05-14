// 1. Find the second largest element in an array.

const findSecondLargest = (nums) => {
    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (let i = 0; i < nums.length; i++) {

        if (nums[i] > largest) {
            secondLargest = largest;
            largest = nums[i];

        } else if (nums[i] > secondLargest && nums[i] !== largest) {
            secondLargest = nums[i];
        }
    }

    return secondLargest;
}

console.log(findSecondLargest([10, 20, 4, 45, 99]));
// Output: 45