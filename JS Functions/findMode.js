function findMode(arr) {
    var freq = {};
    var maxFreq = 0;
    var mode;

    for (var i = 0; i < arr.length; i++) {
        if (freq[arr[i]]) {
            freq[arr[i]]++;
        } else {
            freq[arr[i]] = 1;
        }
        if (freq[arr[i]] > maxFreq) {
            maxFreq = freq[arr[i]];
            mode = arr[i];
        }
    }

    return mode;
}

var numbers = [2, 4, 6, 8, 4, 10, 4];
var mode = findMode(numbers);
console.log(mode); // Output: 4