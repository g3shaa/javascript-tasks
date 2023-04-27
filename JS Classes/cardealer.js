class Car {
    constructor(make, model, year, price) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.price = price;
    }
  }
  
  const inventory = [];
  
  function addCar(make, model, year, price) {
    const car = new Car(make, model, year, price);
    inventory.push(car);
    console.log(`Added ${car.make} ${car.model} ${car.year} for $${car.price}`);
  }
  
  function viewInventory() {
    console.log('Current inventory:');
    inventory.forEach((car, index) => {
      console.log(`${index + 1}. ${car.make} ${car.model} ${car.year} - $${car.price}`);
    });
  }
  
  function removeCar(index) {
    const car = inventory[index];
    inventory.splice(index, 1);
    console.log(`Removed ${car.make} ${car.model} ${car.year} for $${car.price}`);
  }
  
  // Примерна употреба на методите
  addCar('Toyota', 'Corolla', 2022, 20000); 
  addCar('Honda', 'Civic', 2021, 25000);
  viewInventory();
  removeCar(0);
  viewInventory();
  