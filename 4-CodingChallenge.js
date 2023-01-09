let meal_value = 12;

50 <= meal_value <= 300 ? console.log(`15% tip is to be registered`):console.log(`20% tip is to be registered`);

50 <= meal_value <= 300 ?(bill_value = meal_value + 0.15*meal_value )+(console.log(`The Total Amount that has to be paid is = ${meal_value} + 15% tip = ${bill_value}`)):(bill_value =  meal_value + 0.20*meal_value)+(console.log(`The Total Amount that has to be paid is = ${meal_value} + 20% tip = ${bill_value}`));


