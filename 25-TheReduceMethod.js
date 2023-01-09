movement = [200, 450, -400, 3000, -650, -130, 70, 1300];


// ACCUMULATOR => USES => SNOW_BALL

// const balance = movement.reduce(function (acc, curr, i, arr) {
//     console.log(`${i}))-> Current value : ${curr} = Accumuator value : ${acc}`);
//     return curr + acc;
// },0)

// //~~~~~~~~~~~~~~~~~By Using Arrow Method~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~````

// const balance2 = movement.reduce((acc, curr) => curr + acc);
// const net_Amount = balance;
// console.log(net_Amount);


const balance = movement.reduce(function (acc,curr,i,arr) {
    if (acc > curr) {
        return acc;
    }
    else{
        return curr
    }
},movement[0]);

const value = balance;
console.log(value);
