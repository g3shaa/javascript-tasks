function products(input){
    let products = input;
    for (var i = 0; i < products.length; i++){
        console.log((i + 1) + '. ' + products[i])
    }
}

products(['Potatoes', 'Tomatoes', 'Onions', 'Apples'])