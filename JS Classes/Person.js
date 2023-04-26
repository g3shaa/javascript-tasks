class Person {
    constructor(name, age, job) {
        this.name = name;
        this.age = age;
        this.job = job;
    }

    introduce() {
        console.log(`Hi, my name is ${this.name}. I'm ${this.age} years old and I work as a ${this.job}.`);
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age, 'student');
        this.major = major;
    }

    introduce() {
        console.log(`Hi, my name is ${this.name}. I'm ${this.age} years old and I'm studying ${this.major}.`);
    }

    study() {
        console.log(`${this.name} is studying ${this.major}.`);
    }
}

const john = new Person('John', 30, 'developer');
john.introduce();
const alice = new Student('Alice', 20, 'Computer Science');
alice.introduce(); 
alice.study(); 