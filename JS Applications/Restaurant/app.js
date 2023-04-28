const form = document.getElementById('new-order');
const ordersList = document.getElementById('orders');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const tableNumber = e.target['table-number'].value;
    const orderDetails = e.target['order-details'].value;
    const order = {
        name,
        tableNumber,
        orderDetails,
        status: 'Нова поръчка'
    };
    addOrder(order);
    form.reset();
});

function addOrder(order) {
    const li = document.createElement('li');
    li.classList.add('order');
    li.innerHTML = `
    <h3>Име: ${order.name}</h3>
    <p>Маса номер: ${order.tableNumber}</p>
    <p>Поръчка: ${order.orderDetails}</p>
    <p>Статус: ${order.status}</p>
  `;
    ordersList.appendChild(li); // Добавяме поръчката към списъка
}