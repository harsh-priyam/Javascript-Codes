const CalcHumanAge = function (ages) {

    const humanAge =  ages.map(function (age) {
        return age<=2 ? 2 * age : 16 + age * 4 })

 

    const adults = humanAge.filter(function (age) {
        return age>=18;
    })

    console.log(humanAge);
    console.log(adults);   


    const average = adults.reduce((acc,age) => acc+age,0 ) / adults.length
    return average;

}

const avg = CalcHumanAge([5,2,4,1,15,8,3])
console.log(avg);

// $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ 