const object = { 1: "Geshata", 2: "Bog", 3: 1337 };

for (let property in object) {
  console.log(`${property}: ${object[property]}`);
}
