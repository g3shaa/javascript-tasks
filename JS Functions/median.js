function median(arr) {
    arr.sort(function (a, b) {
        return a - b;
    });
    var mid = Math.floor(arr.length / 2);
    if (arr.length % 2 === 0) {
        return (arr[mid - 1] + arr[mid]) / 2;
    } else {
        return arr[mid];
    }
}

var numbers = [2, 4, 7, 8, 10];
var med = median(numbers);
console.log(med); // Output: 6