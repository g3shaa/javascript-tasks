// Клас, който дефинира статичен метод sort, извършващ quick sort върху подаден масив
class QuickSort {
    // Статичен метод, който приема масив и връща сортиран масив, използвайки quick sort
    static sort(array) {
        // Ако масивът има дължина по-малка или равна на 1, просто го връщаме
        if (array.length <= 1) {
            return array;
        }

        // Избираме произволен елемент на масива като пивот
        const pivotIndex = Math.floor(array.length / 2);
        const pivot = array[pivotIndex];
        // Инициализираме два нови масива - един за елементите, по-малки от пивота, и един за елементите, по-големи от него
        const less = [];
        const greater = [];

        // Обхождаме масива и разделяме всички елементи в подходящите масиви
        for (let i = 0; i < array.length; i++) {
            // Пропускаме пивотния елемент
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

        // Рекурсивно сортираме двата нови масива и ги обединяваме заедно с пивота, за да получим крайния сортиран масив
        return [...QuickSort.sort(less), pivot, ...QuickSort.sort(greater)];
    }
}

// Създаваме масив, който искаме да сортираме
const unsortedArray = [3, 7, 8, 5, 2, 1, 9, 5, 4];
// Използваме метода sort на класа QuickSort, за да сортираме масива
const sortedArray = QuickSort.sort(unsortedArray);
// Извеждаме сортирания масив на конзолата
console.log(sortedArray);