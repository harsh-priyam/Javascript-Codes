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

restaurant.orderDelivery({
  startIndex : 2,
  mealIndex : 1,
  address: 'CA-40 kankarbagh',
  time : '21:30'
});

const {name , openingHours, mainMenu } = restaurant;
console.log( name , openingHours , mainMenu);
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const {name : RestraName , openingHours: Hours , mainMenu: foodcatg} = restaurant;
console.log(RestraName,Hours,foodcatg);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~``

// Mutating !!
let a = 121;
let b = 234;
const obj = {a : 1000 , b : 2000 , c : 3000};
// This will leads to a Synatx Error to the Program
// const {a,b} = obj;
// console.log(a,b);
({a,b} = obj);
console.log(a,b);


const  {thrusday : {open , close} } = openingHours;
console.log(open , close);



