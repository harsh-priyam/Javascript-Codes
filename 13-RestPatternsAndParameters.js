const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours: {
        monday:{
            open: 8,
            close: 20,
        },

        tuesday:{
            open: 9,
            close: 21,
        },

        wednesday:{
            open: 10,
            close: 22,
        },

        thrusday:{
            open: 11,
            close: 23,
        },

        friday:{
            open: 6,
            close: 2,
        },
    },

    orderDelivery: function ({startIndex , mealIndex , address , time}) {
         console.log(`Order Recieved !! with ${this.starterMenu[startIndex]} as the starter meal
          and ${this.mainMenu[mealIndex]} as the main course to ${address} at ${time}`);
    },

    order: function (mainIndex,CatalogIndex) {
        return [this.mainMenu[mainIndex] , this.categories[CatalogIndex]];
    }    
};


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const [a,b, ...index] = [24,36,48,60,72,84,96,108,120];
console.log(a,b,index);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const [pizza , , risotto , ...other_dishes] = [...restaurant.starterMenu , ...restaurant.mainMenu,];
console.log(pizza);
console.log(risotto);
console.log(other_dishes);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const {friday , ...weekdays} = restaurant.openingHours;
console.log(weekdays);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const addition = function (...numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i];        
    }
console.log(sum);
}
addition(2,3);
addition(10,20,30);
addition(11,21,32,69);
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~``