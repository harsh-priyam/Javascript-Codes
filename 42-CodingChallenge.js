const MyCars = function(carName, carCurSpeed) {
    this.carName = carName;
    this.carCurSpeed = carCurSpeed;
};

MyCars.prototype.accelerate = function() {
    this.carCurSpeed = this.carCurSpeed + 10;
    console.log(`The Speed Of the ${this.carName} is increased and now it is : ${this.carCurSpeed}`);
};

MyCars.prototype.brake = function() {
    this.carCurSpeed = this.carCurSpeed - 5;
    console.log(`The Speed Of the ${this.carName} is decreased and now it is : ${this.carCurSpeed}`);
};

const car1 = new MyCars('BMW', 120);
const car2 = new MyCars('Mercedes', 90);

console.log(car1, car2);

car1.accelerate();
car1.accelerate();
car1.accelerate();
car1.accelerate();
car1.brake();
car1.brake();
car1.brake();
car1.brake();
car1.brake();

car2.accelerate();
car2.accelerate();
car2.accelerate();
car2.accelerate();
car2.brake();
car2.brake();
car2.brake();
car2.brake();
car2.brake();