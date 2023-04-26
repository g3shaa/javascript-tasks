const Person = require('./Person');

class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }

  async study() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(`Studying hard for grade ${this.grade}...`);
        resolve();
      }, 1000);
    });
  }
}

module.exports = Student;
