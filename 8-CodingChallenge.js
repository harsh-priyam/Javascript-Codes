const Person1 = {
    Name: 'Mark Helfiger',
    Weight: 78,
    height: 1.9,

    CalcBMI: function () {
        this.BMI = this.Weight / this.height ** 2;
        return this.BMI;
    }

};

const Person2 = {
    Name: 'Jhon Marston',
    Weight: 92,
    height: 2.2,

    CalcBMI: function () {
        this.BMI = this.Weight / this.height ** 2;
        return this.BMI;

    }
};

// This is Way to trigger the function in its working condition
Person1.CalcBMI();
Person2.CalcBMI();


// console.log(Person1.BMI);
// console.log(Person2.BMI);

if (Person1.BMI > Person2.BMI) {
 console.log(`${Person1.Name} has the weight of ${Person1.Weight} and the height of ${Person1.height} which
 collectively has a BMI of ${Person1.BMI}`);   
}
else{
    console.log(`${Person2.Name} has the weight of ${Person2.Weight} and the height of ${Person2.height} which
    collectively has a BMI of ${Person2.BMI}`);     
}