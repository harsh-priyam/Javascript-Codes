const Person = function(firstName, birthYear) {
    // Instance Properties~~~~~~~~~~~
    this.firstName = firstName;
    this.birthYear = birthYear;
};

const harsh = new Person('Harsh', 2000);
const michael = new Person('Michael', 1967);


console.log(Person.prototype);

Person.prototype.CalcAge = function() {
    console.log(2022 - this.birthYear);
};

console.log(`The Age of Harsh in the year 2022 will be :-`);
harsh.CalcAge();
console.log(`The Age of Michael in the year 2022 will be :-`);
michael.CalcAge();

console.log(harsh.__proto__);
console.log(harsh.__proto__ == Person.prototype)

console.log(Person.prototype.isPrototypeOf(harsh));
console.log(Person.prototype.isPrototypeOf(michael));
console.log(Person.prototype.isPrototypeOf(Person));



Person.prototype.species = 'Human Being';
console.log(harsh.species);
console.log(michael.species);

console.log(harsh.hasOwnProperty('species'));
console.log(harsh.hasOwnProperty('firstName'));


console.log(harsh.__proto__);
console.log(harsh.__proto__.__proto__);
console.log(harsh.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [1, 2, 34, 5, 67, 22];
console.log(arr.__proto__);
console.log(arr.__proto__.__proto__);

Array.prototype.unique = function() {
    return [...new Set(this)];
}

console.log(arr.unique());