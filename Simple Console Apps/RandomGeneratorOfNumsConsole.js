function numbers(){
  let min = 1;
  let max = 25;
  let a = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log("Случайната стойност на " + min + " и " + max + " е " + a);
}

numbers()
