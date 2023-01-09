const bills = [125, 555, 44];
const tips = [15, 20, 15];

let bill1  = bills[0] + bills[0]*tips[0]/100;
let bill2 = bills[1] + bills[1]*tips[1]/100;
let bill3 = bills[2] + bills[2]*tips[2]/100;

console.log(`The First Bill Amount is:`,bill1);
console.log(`The Second Bill Amount is:`,bill2);
console.log(`The Third Bill Amount is:`,bill3);