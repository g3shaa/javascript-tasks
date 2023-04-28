// Полета за въвеждане на име и телефон
const nameInput = document.getElementById("name");
const phoneInput = document.getElementById("phone");

// Бутон за добавяне на контакт
const addBtn = document.getElementById("addBtn");

// Таблица с контактите
const contactsTable = document.getElementById("contacts").getElementsByTagName('tbody')[0];

// Променлива за следващия ID на контакта
let nextContactId = 1;

// Функция за добавяне на контакт
function addContact() {
    // Вземане на стойностите на полетата за въвеждане
    const name = nameInput.value;
    const phone = phoneInput.value;

    // Проверка дали са въведени данни
    if (name.trim() === "" || phone.trim() === "") {
        alert("Моля въведете име и телефон.");
        return;
    }

    // Създаване на нов ред в таблицата
    const newRow = contactsTable.insertRow();

    // Създаване на клетки за име и телефон
    const nameCell = newRow.insertCell();
    const phoneCell = newRow.insertCell();

    // Добавяне на текст в клетките
    nameCell.innerText = name;
    phoneCell.innerText = phone;

  

    // Изчистване на полетата за въвеждане
    nameInput.value = "";
    phoneInput.value = "";

    // Инкрементиране на следващия ID на контакта
    nextContactId++;
}

// Добавяне на функционалност на бутона за добавяне на контакт
addBtn.addEventListener("click", addContact);