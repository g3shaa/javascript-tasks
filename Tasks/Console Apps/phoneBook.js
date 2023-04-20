// Дефиниране на телефонен указател
const phonebook = {
    "Иван": "0888123456",
    "Петър": "0899123456",
    "Мария": "0877123456",
    "Георги": "0881230499",
    "Димитър": "0887123456"
  };
  
  // Функция за търсене на номер по име
  function findPhoneNumber(name) {
    const phoneNumber = phonebook[name];
    if (phoneNumber) {
      console.log(`Телефонният номер на ${name} е: ${phoneNumber}`);
    } else {
      console.log(`Не е намерен телефонен номер за ${name}`);
    }
  }
  
  // Извикване на функцията за търсене на номер по име
  findPhoneNumber("Георги");
  