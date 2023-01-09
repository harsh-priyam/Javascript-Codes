
const movement =  [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUSD = 1.1;

const movementsUSDfor = [];


for (const mov of movement) movementsUSDfor.push(mov * eurToUSD);
console.log(movementsUSDfor);



const movementDescriptions = movement.map(
    (mov,i) =>
    `Movements ${i+1}: You ${mov>0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`
    );
