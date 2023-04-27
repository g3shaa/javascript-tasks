// Деклариране на масив за представяне на стека
var stack = [];

// Функция за добавяне на елемент в стека
function push(item) {
  stack.push(item);
}

// Функция за премахване на последния елемент от стека
function pop() {
  return stack.pop();
}

// Функция за връщане на последния елемент на стека без да го премахва
function peek() {
  return stack[stack.length - 1];
}

// Примерна употреба на стека
push(1);
push(2);
push(3);
console.log(stack); // [1, 2, 3]
console.log(pop()); // 3
console.log(stack); // [1, 2]