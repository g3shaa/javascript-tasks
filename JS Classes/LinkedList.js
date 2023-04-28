// Клас, който представя един елемент от свързания списък
class Node {
    constructor(value) {
        this.value = value; // Стойността на елемента
        this.next = null; // Указател към следващия елемент в списъка
    }
}

// Клас, който представя свързания списък
class LinkedList {
    constructor() {
        this.head = null; // Полето за началото на списъка е null, тъй като списъкът е празен
    }

    // Метод за добавяне на нов елемент в списъка
    addNode(value) {
        const newNode = new Node(value); // Създаване на нов елемент от тип Node
        if (this.head == null) { // Ако списъкът е празен
            this.head = newNode; // Новият елемент става начало на списъка
        } else { // Ако списъкът не е празен
            let currentNode = this.head; // Започваме от началото на списъка
            while (currentNode.next != null) { // Продължаваме да вървим по списъка докато не стигнем края
                currentNode = currentNode.next;
            }
            currentNode.next = newNode; // Новият елемент става следващият за текущия последен елемент
        }
    }
}

// Създаване на нов свързан списък
const list = new LinkedList();

// Добавяне на няколко елемента в списъка
list.addNode(1);
list.addNode(2);
list.addNode(3);
list.addNode(4);

// Принтиране на списъка
let currentNode = list.head;
while (currentNode != null) {
  console.log(currentNode.value);
  currentNode = currentNode.next;
}
