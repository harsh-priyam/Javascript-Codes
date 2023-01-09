const person = function(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
};

person.prototype.CalcAge = function() {
    console.log(2022 - this.birthYear);
};

const Student = function(firstName, birthYear, courseTaken) {
    // this.firstName = firstName;
    // this.birthYear = birthYear;
    person.call(this, firstName, birthYear);
    this.courseTaken = courseTaken;
};

Student.prototype = Object.create(person.prototype);

Student.prototype.introduce = function() {
    console.log(`My Name is ${this.firstName} and I study ${this.courseTaken}`);
}

const student1 = new Student('Harsh', 2000, 'ComputerScience');
console.log(student1);
student1.introduce();

console.log(student1.__proto__);
console.log(student1.__proto__.__proto__);

console.log(student1 instanceof Student);
console.log(student1 instanceof person);
console.log(student1 instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);