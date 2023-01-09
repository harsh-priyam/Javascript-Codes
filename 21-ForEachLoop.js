const movements = [6700, 200, -100, -540, 300, 1000, -3000, 650, 720, -2, -1000, 20];

movements.forEach(function (mov, index) {
    if (mov > 0) {
        console.log(`Message-${index + 1}-Dear Customer, Your a/c XXXXXXXXX0494 is credited for Rs. ${mov}`);
    }
    else {
        console.log(`Message-${index + 1}-Dear Customer, Your a/c XXXXXXXXX0494 is debited for Rs. ${Math.abs(mov)}`)
    }
});


console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);

for(const [index,mov] of movements.entries()){
    if (mov > 0) {
        console.log(`Message-${index + 1}-Dear Customer,Your a/c XXXXXXXXX0494 is credited for Rs. ${mov}`);
    }
    else {
        console.log(`Message-${index + 1}-Dear Customer,Your a/c XXXXXXXXX0494 is debited for Rs. ${Math.abs(mov)}`)
    }
}