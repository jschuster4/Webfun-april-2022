function pizzaOven(crustType, sauceType, cheeses, toppings){
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var pizza1 = pizzaOven("deep dish", "traditional", "mozzarella", "pepperoni, sausage");
console.log(pizza1);

var pizza2 = pizzaOven("hand tossed", "marinara", "mozzarella, feta", "mushrooms, olives, onions");
console.log(pizza2);

var pizza3 = pizzaOven("thin crust", "ranch", "cheddar, mozzarella", "chicken, turbo crusted, buffalo sauce drizzle");
console.log(pizza3);

var pizza4 = pizzaOven("cauliflower crust", "marinara", "mozzarella", "sausage, bacon, ham, spicy pepperoni");
console.log(pizza4);

var crustTypes = ["thin crust", "deep dish", "cauliflower crust", "New York Style"];
var sauceTypes = ["traditional", "ranch","marinara", "spicy marinara"]; 
var cheeses = ["feta", "cheddar", "mozzarella"]; 
var toppings = ["perpperoni", "sausage", "onions", "peppers", "trubo crusted", "bacon", "ham"];


function randomRange(max, min){
    return Math.floor(Math.random()  * max - min) + min;
}
function randomPick(arr){
    var i = Math.floor(arr.length * Math.random());
    return arr[i];
}
function randomPizza(crustType, sauceType, cheeses, toppings){
    var pizza = {};
    
    pizza.crustType = randomPick(crustTypes)
    pizza.sauceType = randomPick(sauceTypes);
    pizza.cheeses = [];
    pizza.toppings = [];
    for(var i= 0; i< randomRange(3,1); i++ ){
        pizza.cheeses.push(randomPick(cheeses));
    }
    for(var i= 0; i< randomRange(6,0); i++ ){
        pizza.toppings.push(randomPick(toppings));
    }

    return pizza;
}
console.log(randomPizza());