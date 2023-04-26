class Animal {
    constructor(name, age, species) {
        this.name = name;
        this.age = age;
        this.species = species;
    }

    speak() {
        console.log(`${this.name} speaks.`);
    }
}

class Canine extends Animal {
    constructor(name, age, species) {
        super(name, age, species);
        this.sound = 'bark';
    }

    speak() {
        console.log(`${this.name} barks.`);
    }
}

class Feline extends Animal {
    constructor(name, age, species) {
        super(name, age, species);
        this.sound = 'meow';
    }

    speak() {
        console.log(`${this.name} meows.`);
    }
}

class Dog extends Canine {
    constructor(name, age, breed) {
        super(name, age, 'dog');
        this.breed = breed;
    }

    fetch() {
        console.log(`${this.name} fetches the ball.`);
    }
}

class Cat extends Feline {
    constructor(name, age, breed) {
        super(name, age, 'cat');
        this.breed = breed;
    }

    scratch() {
        console.log(`${this.name} scratches the sofa.`);
    }
}

class Pet {
    constructor(animal) {
        this.animal = animal;
    }

    introduce() {
        console.log(`This is ${this.animal.name}, a ${this.animal.age}-year-old ${this.animal.species} that ${this.animal.sound}s.`);
    }
}

class CaninePet extends Pet {
    constructor(canine) {
        super(canine);
    }

    walk() {
        console.log(`${this.animal.name} goes for a walk.`);
    }
}

class FelinePet extends Pet {
    constructor(feline) {
        super(feline);
    }

    play() {
        console.log(`${this.animal.name} plays with a toy.`);
    }
}

const rover = new Dog('Rover', 3, 'Golden Retriever');
const mittens = new Cat('Mittens', 2, 'Siamese');

const dogPet = new CaninePet(rover);
const catPet = new FelinePet(mittens);

dogPet.introduce();
dogPet.walk();

catPet.introduce();
catPet.play();