class BubbleSort {
    static sort(array) {
        const n = array.length;
        for (let i = 0; i < n; i++) {
            // Пропускаме последните i елемента, тъй като те вече са на мястото си
            for (let j = 0; j < n - i - 1; j++) {
                // Ако текущият елемент е по-голям от следващия, разменяме ги
                if (array[j] > array[j + 1]) {
                    const temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                }
            }
        }
        return array;
    }
}

// Демонстрация на сортиране на масив
const myArray = [5, 3, 8, 1, 2, 7];
console.log(`Масивът преди сортирането: ${myArray}`);
const sortedArray = BubbleSort.sort(myArray);
console.log(`Масивът след сортирането: ${sortedArray}`);