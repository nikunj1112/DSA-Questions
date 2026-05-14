// 3. Find the first non-repeating character in a stream.

const findFirstNonRepeating = (text) => {

    let frequency = {};
    let queue = [];
    let answer = [];

    for (let char of text) {
        frequency[char] = (frequency[char] || 0) + 1;
        if (frequency[char] === 1) {
            queue.push(char);
        }
        while (
            queue.length > 0 &&
            frequency[queue[0]] > 1
        ) {
            queue.shift();
        }
        answer.push(
            queue.length === 0 ? -1 : queue[0]
        );
    }
    return answer;
}

console.log(findFirstNonRepeating("aabc"));
// Output: ['a', -1, 'b', 'b']
