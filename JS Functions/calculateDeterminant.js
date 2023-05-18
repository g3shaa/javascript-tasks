// Функция за изчисляване на детерминанта на дадена матрица
function calculateDeterminant(matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;

    // Проверка дали матрицата е квадратна
    if (rows !== cols) {
        throw new Error("Матрицата не е квадратна");
    }

    // Ако матрицата е 1x1, връщаме елемента
    if (rows === 1 && cols === 1) {
        return matrix[0][0];
    }

    let determinant = 0;

    // Изчисляваме детерминантата чрез рекурсия
    for (let i = 0; i < rows; i++) {
        let sign = i % 2 === 0 ? 1 : -1;

        let subMatrix = getSubMatrix(matrix, i);

        determinant += sign * matrix[0][i] * calculateDeterminant(subMatrix);
    }

    return determinant;
}

// Функция за извличане на подматрица, която се получава от изтриването на една колона
function getSubMatrix(matrix, colToRemove) {
    let rows = matrix.length;
    let cols = matrix[0].length;

    let subMatrix = [];

    for (let i = 1; i < rows; i++) {
        subMatrix[i - 1] = [];

        let colIndex = 0;

        for (let j = 0; j < cols; j++) {
            if (j === colToRemove) {
                continue;
            }

            subMatrix[i - 1][colIndex] = matrix[i][j];
            colIndex++;
        }
    }

    return subMatrix;
}

// Тестова матрица за изчисляване на детерминанта
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 6]
];

// Изчисляване на детерминантата и извеждане на резултата
let determinant = calculateDeterminant(matrix);
console.log("Determinant: " + determinant);