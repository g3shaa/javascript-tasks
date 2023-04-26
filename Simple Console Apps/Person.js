class Person{
    constructor(firstName, lastName, age, email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }

    toString(){
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
    }
}


let person2 = new Person("Georgi", "Aprahamov", 18, "gogo46219@gmail.com")
console.log(person2.firstName)
console.log(person2.lastName)
console.log(person2.age)
console.log(person2.email)