const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    order: function (mainIndex,CatalogIndex) {
        return [this.mainMenu[mainIndex] , this.categories[CatalogIndex]];
    },
    
    orderPizza: function (ing1 , ing2 , ing3) {
        console.log(`Hey! Here is your Delicious Pizza with the ingredients as ${ing1} , ${ing2} and ${ing3}`);
    }


};

const arr = [1,2,3];
const badArr = [23,78,arr[0],arr[1],arr[2]];
console.log(badArr);
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const NewArr = [98,56, ...arr];
console.log(NewArr);
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const newItem = [...restaurant.starterMenu,'Maggi'];
console.log(newItem);
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const menu = [...restaurant.starterMenu , ...restaurant.mainMenu];
console.log(menu);
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const str = 'Harsh';
console.log(...str);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const letters = [...str , 'Priyam'];
console.log(letters);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~``
// console.log(`My Name is ${...str} and i m a good boy`); ~~~~~~~This will generate Error

const ingredients = [
    prompt(`Please Enter Your First Ingredient!!!`),
    prompt(`Please Enter Your Second Ingredient!!!`),
    prompt(`Please Enter Your Last and Final Ingredient!!!`)
];

console.log(ingredients);

// restaurant.orderPizza(ingredients[0],ingredients[1],ingredients[2]); <<<Old Method>>

// <<<<<<<<<<Using The Spread Operator>>>>>>>>>>>>>>>>
restaurant.orderPizza(...ingredients);

