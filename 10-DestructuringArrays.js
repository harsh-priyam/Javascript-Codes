const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    order: function (mainIndex,CatalogIndex) {
        return [this.mainMenu[mainIndex] , this.categories[CatalogIndex]];
    }    
};

const arr = [12,24,36];
const x = arr[0];
const y = arr[1];
const z = arr[2];
const [a,b,c] = arr;
console.log(a,b,c);
console.log(arr);
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const [first,,second] = restaurant.categories;
console.log(first,second);
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const [food1 , food2] = restaurant.order(2,0);
console.log(food1,food2);
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const nested = [12,24,[36,48]];
const [i,,[j,k]] = nested;
console.log(i,j,k);
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const [p,q,r] = [23,444];
console.log(p,q,r);
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const [m = 23 , n = 34 , o = 90] = [12,24];
console.log(m,n,o);