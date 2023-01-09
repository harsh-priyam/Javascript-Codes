const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
    if (bills[i] >= 50 && bills[i] <= 300) {
        console.log(`The Amount of Bill-${i} with 15% tip included is : `, bills[i] + bills[i] * 15 / 100);
    }
    else {
        console.log(`The Amount of Bill-${i} with 20% tip included is : `, bills[i] + bills[i] * 20 / 100);
    }
}


const Average = function (bills) {
    let sum = 0;
    for (let i = 0; i < bills.length; i++) {
        sum = sum + bills[i];
    }
    let avg = sum/bills.length;
    // console.log(`The Average of the given elements inside the array is:`,avg);
    return avg;
}

console.log(Average(bills));


