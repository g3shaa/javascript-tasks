// Дефиниране на масив с продукти
const products = [
    {
      name: "Червена тениска",
      price: 20.99,
      description: "Тениска от 100% памук",
      category: "Дрехи"
    },
    {
      name: "Синя риза",
      price: 35.50,
      description: "Риза от памук и полиестер",
      category: "Дрехи"
    },
    {
      name: "Лаптоп Lenovo",
      price: 1599.00,
      description: "Лаптоп с Intel Core i7 процесор",
      category: "Електроника"
    },
    {
      name: "Смартфон Samsung",
      price: 899.00,
      description: "Смартфон с 6.2-инчов дисплей и 128GB памет",
      category: "Електроника"
    }
  ];
  
  // Функция за извеждане на всички продукти
  function showAllProducts() {
    console.log("Всички продукти:");
    products.forEach((product, index) => {
      console.log(`${index + 1}. ${product.name} - ${product.price} лв.`);
    });
  }
  
  // Функция за търсене на продукт по име
  function findProductByName(name) {
    const product = products.find(p => p.name === name);
    if (product) {
      console.log(`Продуктът "${product.name}" е наличен на цена ${product.price} лв.`);
    } else {
      console.log(`Продуктът "${name}" не е намерен.`);
    }
  }
  
  // Извикване на функциите за извеждане на всички продукти и търсене на продукт по име
  showAllProducts();
  findProductByName("Лаптоп Lenovo");
  