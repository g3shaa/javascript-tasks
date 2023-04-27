// Функция, която връща Promise обект
function calculateSum(a, b) {
    return new Promise((resolve, reject) => {
      if (typeof a === 'number' && typeof b === 'number') {
        const sum = a + b;
        resolve(sum);
      } else {
        reject('Невалидни данни за сумиране');
      }
    });
  }
  
  // Използване на Promise обекта
  calculateSum(5, 50)
    .then(result => console.log(`Сумата е: ${result}`))
    .catch(error => console.error(`Грешка: ${error}`));
  
