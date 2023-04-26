class Shape {
    constructor(color) {
        this.color = color;
    }

    getArea() {
        console.log('Area calculation not implemented');
    }
}

class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }

    getArea() {
        return Math.PI * this.radius ** 2;
    }
}

class Rectangle extends Shape {
    constructor(color, width, height) {
        super(color);
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }
}

const redCircle = new Circle('red', 5);
console.log(`The area of the ${redCircle.color} circle with radius ${redCircle.radius} is ${redCircle.getArea()}`);

const blueRectangle = new Rectangle('blue', 10, 5);
console.log(`The area of the ${blueRectangle.color} rectangle with width ${blueRectangle.width} and height ${blueRectangle.height} is ${blueRectangle.getArea()}`);