const Person = function(firstName, birthYear) {
    // Instance Properties~~~~~~~~~~~
    this.firstName = firstName;
    this.birthYear = birthYear;
};

const harsh = new Person('Harsh', 2000);
const michael = new Person('Michael', 1967);

console.log(harsh, michael);

// Step-1 -: New {} is created
// Step-2 -: function is called, this = {}
// Step-3 -: {} linked to prototype
// Step-4 -: function automatically return {}



console.log(harsh instanceof Person);