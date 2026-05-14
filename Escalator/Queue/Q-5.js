// 5. Generate binary numbers from 1 to n using a queue.

const generateBinaryNumbers = (limit) => {

    let result = [];
    let queue = ["1"];

    for (let i = 0; i < limit; i++) {
        let current = queue.shift();
        result.push(current);
        queue.push(current + "0");
        queue.push(current + "1");
    }
    return result;
}

console.log(generateBinaryNumbers(5));
// Output: ['1', '10', '11', '100', '101']