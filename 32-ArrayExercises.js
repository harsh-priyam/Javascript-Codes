// ARRAY EXERCISES FOR PRACTICE COZ PRACTICE MAKES THE MAN PERFECT~~~~~~~~~~~~~~~~~~~~~~~~~~

const account1 = {
    owner: 'Harsh Priyam',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2,
    pin: 1111,
};
const account2 = {
    owner: 'Sujita Kumari',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};

const account3 = {
    owner: 'Mukesh Ambani',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};

const account4 = {
    owner: 'Jeff Bezos',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};

const accounts = [account1, account2, account3, account4];



// @@@@@@@@@@@@@@@@@@@Exercise -1 - Map , Flat , Flatmap , Filter & Reduce 

// Using Maps and flat functions
const totalDeposits = accounts.map((cur) => cur.movements).flat().filter((curr) => curr > 0).reduce((sum, curr) => sum + curr, 0);
console.log(totalDeposits);

// Using Flatmaps
const totalWithdrawal = accounts.flatMap((cur) => cur.movements).filter((curr) => curr < 0).reduce((sum, curr) => sum + curr, 0);
console.log(totalWithdrawal);


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


// @@@@@@@@@@@@@@@@@ Exercise -2 - Appication On Reduce -:

// Method-1
// const Length = accounts.map((curr) => curr.movements).flat().filter((curr) => curr>=1000).length;
// console.log(Length);

// Method-2
const Length = accounts.flatMap((curr) => curr.movements).reduce((count, acc) => acc >= 1000 ? count + 1 : count, 0);
console.log(Length);


// @@@@@@@@@@@@@@@@@@@@@@ Exercise -3 -  Application On Reduce -:

const { deposits, withdrawals } = accounts.flatMap(acc => acc.movements).reduce((sums, curr) => {
    curr > 0 ? (sums.deposits += curr) : (sums.withdrawals += curr);
    return sums;
},  
       { deposits: 0, withdrawals: 0 }
);

console.log(deposits , withdrawals);


// @@@@@@@@@@@@@@@@@@@@@@ Exercise - 4 - Application On Strings (Convert to String on the basis of exceptions) -:

const convertTitleCase = function (title) {


const exceptions = ['a' , 'an' , 'and' , 'the' , 'but' , 'or' , 'on' , 'in' , 'with'];

  const capitalize = str => str[0].toUpperCase() + str.slice(1)

    const titleCase = title.toLowerCase().split(' ').map(word=>exceptions.includes(word) ? word : capitalize(word).join(' '));
    
    return capitalize(titleCase);

    
}

console.log(convertTitleCase(`this is a nice title`));