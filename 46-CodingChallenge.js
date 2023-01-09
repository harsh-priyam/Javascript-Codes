class MyCars {
    constructor(carName, carCurSpeed) {
        this.carName = carName;
        this.carCurSpeed = carCurSpeed;
    }


    accelerate() {
        this.carCurSpeed = this.carCurSpeed + 10;
        console.log(`The Speed Of the ${this.carName} is increased and now it is : ${this.carCurSpeed} kmph`);
    }

    brake() {
        this.carCurSpeed = this.carCurSpeed - 5;
        console.log(`The Speed Of the ${this.carName} is decreased and now it is : ${this.carCurSpeed} kmph`);
    }

    get SpeedUS() {
        return this.carCurSpeed / 1.6;
    }

    set SpeedUS(carCurSpeed) {
        this.carCurSpeed = carCurSpeed * 1.6
    }
}

const car1 = new MyCars('Lamborghini', 220);
console.log(car1.SpeedUS);

car1.accelerate();
car1.accelerate();
car1.accelerate();
car1.accelerate();
car1.brake();
car1.brake();
car1.brake();
car1.accelerate();
car1.accelerate();

car1.SpeedUS = 50;
console.log(car1);