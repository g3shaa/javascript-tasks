class Queue {
    constructor() {
        this.items = [];
    }

    //добавя елемент накрая на опашката
    enqueue(element) {
        this.items.push(element);
    }

    //връща елемента от началото на опашката без да го премахва 
    dequeue() {
        if (this.isEmpty()) {
            return "Underflow";
        }
        return this.items.shift();
    }


    //връща първия елемент в опашката, без да го премахва от нея
    front() {
        if (this.isEmpty()) {
            return "No elements in Queue";
        }
        return this.items[0];
    }

    //проверява дали опашката е празна
    isEmpty() {
        return this.items.length === 0;
    }

    //извежда всички елементи в опашката последователно, като започва от първия елемент и завършва с последния
    printQueue() {
        let str = "";
        for (let i = 0; i < this.items.length; i++) {
            str += this.items[i] + " ";
        }
        console.log(str);
    }
}

const queue = new Queue();

console.log(queue.isEmpty()); // true

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

queue.printQueue(); // "10 20 30"

console.log(queue.front()); // 10

console.log(queue.dequeue()); // 10

queue.printQueue(); // "20 30"