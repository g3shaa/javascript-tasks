// Обект Process
const process = require('process');

// Функция за извеждане на информация за операционната система
function printOSInfo() {
  console.log(`Операционна система: ${process.platform}`);
  console.log(`Архитектура на процесора: ${process.arch}`);
  console.log(`Версия на Node.js: ${process.version}`);
}

// Функция за извеждане на информация за системните променливи
function printEnvVars() {
  console.log('Системни променливи:');
  for (const [key, value] of Object.entries(process.env)) {
    console.log(`${key}: ${value}`);
  }
}

// Обект Child Process
const child_process = require('child_process');

// Функция за стартиране на команда в нов процес
function runCommand(command) {
  console.log(`Стартиране на команда: ${command}`);
  child_process.exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Грешка: ${error.message}`);
    } else if (stderr) {
      console.error(`Грешка: ${stderr}`);
    } else {
      console.log(`Резултат: ${stdout}`);
    }
  });
}

// Извеждане на информация за операционната система
printOSInfo();

// Извеждане на информация за системните променливи
printEnvVars();

