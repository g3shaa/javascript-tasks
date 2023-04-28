function findSecondLargest(arr) {
    let largest = -Infinity;
    let secondLargest = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] !== largest) {
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}


let numbers = [3, 5, 2, 8, 1];
let secondLargest = findSecondLargest(numbers);
console.log(secondLargest); // Output: 5