class QuickSort {
    static sort(array) {
        if (array.length <= 1) {
            return array;
        }

        const pivotIndex = Math.floor(array.length / 2);
        const pivot = array[pivotIndex];
        const less = [];
        const greater = [];

        for (let i = 0; i < array.length; i++) {
            if (i === pivotIndex) {
                continue;
            }

            const current = array[i];

            if (current < pivot) {
                less.push(current);
            } else {
                greater.push(current);
            }
        }

        return [...QuickSort.sort(less), pivot, ...QuickSort.sort(greater)];
    }
}

const unsortedArray = [3, 7, 8, 5, 2, 1, 9, 5, 4];
const sortedArray = QuickSort.sort(unsortedArray);
console.log(sortedArray);