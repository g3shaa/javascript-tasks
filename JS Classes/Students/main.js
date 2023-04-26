const Student = require('./Student');

async function main() {
  const student = new Student('Alice', 20, 10);
  await student.sayHello();
  await student.study();
}

main();