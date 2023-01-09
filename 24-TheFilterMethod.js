const movement = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposits = movement.filter(function (mov) {
    return mov>0;
})

const withdraw = movement.filter(function (mov) {
    return mov<0;
})

const Deposit_Amounts = deposits;
const Withdraw_Amounts = withdraw;

console.log(Deposit_Amounts);
console.log(Withdraw_Amounts);