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


console.log(23 || 'harsh');
console.log(' ' || 'Priyam');
console.log(true || 0);
console.log(undefined || null);


console.log(23 && 'harsh');
console.log(' ' && 'Priyam');
console.log(true && 0);
console.log(undefined && null);
