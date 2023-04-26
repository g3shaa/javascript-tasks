class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    async sayHello() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
          resolve();
        }, 1000);
      });
    }
  }
  
  module.exports = Person;
  