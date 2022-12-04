const fs = require("fs");
const stringToWrite = "1 3 3 7 - LEET HACKER";

fs.writeFile("./test.txt", stringToWrite, (err) => {
if (err) {
    console.error(err);
return;
  }
});
console.log("Готово");