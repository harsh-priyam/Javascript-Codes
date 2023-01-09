// const PersonCl = class {};
// class declaration

class PersonCl {

    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }

    calcAge() {
        console.log(2022 - this.birthYear);
    }


}

const name1 = new PersonCl('HarshPriyam', 2000);
console.log(name1);
name1.calcAge();

console.log(name1.__proto__ === PersonCl.prototype);

PersonCl.prototype.greet = function() {
    console.log(`Hello ${this.firstName}`);
}

name1.greet();

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode