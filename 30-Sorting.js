myNames = ['Harsh','Priyam','Akash','Ankit','Meghdoot','Bulbul'];
movements = [-100,-200,199,-20,120,900,1,10];

const Sortednames = myNames.sort();
console.log(Sortednames);


// CONCEPT OF SORTING

// return < 0 :- a , b (keep order)
// return > 0 :- a , b (switch order)

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~``


// ASCENDING ORDER IN JAVASCRIPT

// const Sortedmovements = movements.sort(function (a,b) {
//     if (a>b) {
//         return 1;
//     }
//     if (a<b) {
//         return -1;
//     }
// });
// console.log(Sortedmovements);

const Sortedmovements = movements.sort((a,b)=>a-b)
console.log(Sortedmovements);

// const Sortedmovements2 = movements.sort(function (a,b) {
//     if (a>b) {
//         return -1;
//     }
//     if (a<b) {
//         return 1;
//     }
// });
// console.log(Sortedmovements2);

const Sortedmovements2 = movements.sort((a,b)=>b-a);
console.log(Sortedmovements2);