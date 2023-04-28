function loveLetterMystery(s) {
    let operations = 0;
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        operations += Math.abs(s.charCodeAt(left) - s.charCodeAt(right));
        left++;
        right--;
    }
    return operations;
}

// Example input and output
let input = ["abc", "abcba", "abcd", "cba"];
let output = input.map((s) => loveLetterMystery(s));
console.log(output); // [2,0,4,2]