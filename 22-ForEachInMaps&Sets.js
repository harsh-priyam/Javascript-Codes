const currencies = new Map ([
  ['USD','United States Dollar'],
  ['EURO', 'Europian United Currency'],
  ['GBP' , 'Pounds WorldWide Currency'],
  ['Rs' , 'Rupees Indian Currency'],
]);

currencies.forEach(function (value,key,map) {
    console.log(`${key} ::: ${value}`);
})


console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);

const states = new Set (['PATNA' , 'DELHI' ,'KOLKATA' , 'BANGALORE']);

states.forEach(function (value,key,set) {
    console.log(`${key} ::: ${value} :::${set}`);
})