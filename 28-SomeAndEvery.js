const movments = [100,200,-300,1000,-540,20000,7,-23,6000,-3000,50];
const movments2 = [100,200,300,400,500];

// Search Only For Equality-:
console.log(movments.includes(-390));

// Search  For Conditions As Well as The Equalitys-:
const MyData = movments.some(curr => curr < 0);
console.log(MyData);

const MyData2 = movments.some(curr=> curr === 90);
console.log(MyData2);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~EVERY STATEMENT~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

myInput = movments.every(curr => curr>0);
console.log(myInput);

myInput2 = movments2.every(index => index>0);   
console.log(myInput2);




