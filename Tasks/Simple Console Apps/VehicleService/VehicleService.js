// Дефиниране на клас VehicleService
class VehicleService {
    constructor(name, type, price) {
      this.name = name;
      this.type = type;
      this.price = price;
    }
  }
  
  // Дефиниране на клас Vehicle
  class Vehicle {
    constructor(make, model, year, services = []) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.services = services;
    }
  
    addService(service) {
      this.services.push(service);
    }
  
    getServiceCost() {
      let totalCost = 0;
      for (let service of this.services) {
        totalCost += service.price;
      }
      return totalCost;
    }
  
    getVehicleInfo() {
      let serviceList = '';
      for (let service of this.services) {
        serviceList += '\n - ' + service.name + ' (' + service.type + ') - $' + service.price.toFixed(2);
      }
      return `${this.year} ${this.make} ${this.model} (${this.services.length} services)${serviceList}`;
    }
  }
  
  // Извикване на функцията за стартиране на приложението
  startApp();
  
  // Функция за стартиране на приложението
  function startApp() {
    // Дефиниране на празен списък с превозни средства
    const vehicles = [];
  
    // Добавяне на превозно средство
    const vehicle1 = new Vehicle('Toyota', 'Yaris', 2000);
    vehicle1.addService(new VehicleService('Oil change', 'Regular', 39.99));
    vehicle1.addService(new VehicleService('Tire rotation', 'Regular', 24.99));
    vehicles.push(vehicle1);
  
    // Добавяне на друго превозно средство
    const vehicle2 = new Vehicle('Honda', 'Civic', 2018);
    vehicle2.addService(new VehicleService('Oil change', 'Synthetic', 69.99));
    vehicle2.addService(new VehicleService('Brake pads replacement', 'Premium', 299.99));
    vehicles.push(vehicle2);
  
    // Извеждане на информация за всички превозни средства
    console.log('Vehicle Service Management');
    for (let vehicle of vehicles) {
      console.log(vehicle.getVehicleInfo());
      console.log('Total service cost: $' + vehicle.getServiceCost().toFixed(2));
      console.log('----------------------------');
    }
  }
  
