function addNumber(...args) {
    return args.reduce((total,num) => total+num); 
  }
  
  console.log(addNumber(2,4,5))
  console.log(addNumber(10,45,34,130)) 