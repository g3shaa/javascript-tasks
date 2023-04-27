const form = document.querySelector('#user-form');
const saveButton = document.querySelector('#save-btn');
const resetButton = document.querySelector('#reset-btn');
const tableBody = document.querySelector('#user-table-body');
let users = [];

// Load saved user data from local storage
function loadUsers() {
  if (localStorage.getItem('users')) {
    users = JSON.parse(localStorage.getItem('users'));
    displayUsers();
  }
}

// Display saved user data in table
function displayUsers() {
  tableBody.innerHTML = '';
  users.forEach((user, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${user.firstName}</td>
      <td>${user.lastName}</td>
      <td>${user.department}</td>
      <td>${user.sex}</td>
      <td>
        <button class="edit-btn" data-id="${index}">Edit</button>
        <button class="delete-btn" data-id="${index}">Delete</button>
      </td>
    `;
    tableBody.appendChild(row);
  });
}

// Save user data to local storage
function saveUsers() {
  localStorage.setItem('users', JSON.stringify(users));
}

// Reset form
function resetForm() {
  form.reset();
  saveButton.innerHTML = 'Save';
  saveButton.removeEventListener('click', updateUser);
  saveButton.addEventListener('click', addUser);
}

// Add new user data to table and local storage
function addUser(event) {
  event.preventDefault();
  const firstName = document.querySelector('#first-name').value;
  const lastName = document.querySelector('#last-name').value;
  const department = document.querySelector('#department').value;
  const sex = document.querySelector('input[name="sex"]:checked').value;

  const user = {
    firstName,
    lastName,
    department,
    sex,
  };

  users.push(user);
  displayUsers();
  saveUsers();
  resetForm();
}

// Delete user data from table and local storage
function deleteUser(event) {
  if (event.target.classList.contains('delete-btn')) {
    const id = event.target.dataset.id;
    users.splice(id, 1);
    displayUsers();
    saveUsers();
  }
}

// Edit user data
function editUser(event) {
  if (event.target.classList.contains('edit-btn')) {
    const id = event.target.dataset.id;
    const user = users[id];
    document.querySelector('#first-name').value = user.firstName;
    document.querySelector('#last-name').value = user.lastName;
    document.querySelector('#department').value = user.department;
    document.querySelector(`input[name="sex"][value="${user.sex}"]`).checked = true;
    saveButton.innerHTML = 'Update';
    saveButton.removeEventListener('click', addUser);
    saveButton.addEventListener('click', updateUser);

    function updateUser(event) {
      event.preventDefault();
      user.firstName = document.querySelector('#first-name').value;
      user.lastName = document.querySelector('#last-name').value;
      user.department = document.querySelector('#department').value;
      user.sex = document.querySelector('input[name="sex"]:checked').value;
      displayUsers();
      saveUsers();
      resetForm();
    }
  }
}

loadUsers();
resetButton.addEventListener('click', resetForm);
tableBody.addEventListener('click', deleteUser);
tableBody.addEventListener('click', editUser);
form.addEventListener('submit', addUser);
