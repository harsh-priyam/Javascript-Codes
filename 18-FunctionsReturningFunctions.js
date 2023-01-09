const greet = function (message) {
    return function(name) {
        console.log(`${message}!! How are you Mr. ${name}`);
    }
}

// Method-1~~~~~~~~~~~~~~~~~~~~~~~~~~~
const GreetMe = greet('Hey');
GreetMe('Harsh');

// Method -2~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
greet('Good Morning')('Harsh Priyam');


// Using Arrow Function~~~~~~~~~~~~~~~~~~~~~~~~~~~
const EmpowerMe = Quote => Naam => console.log(`${Quote}!! My Dear ${Naam}`); 
EmpowerMe('Brace Yourself')('Harsh Priyam');