const lufthansa = {
    airline: 'Lufthansa Holiday Airlines',
    iataCode: 'LHA',
    bookings: [],

    book: function (flightNum, name) {
        console.log(`${name} has booked a seat on ${this.airline} which has flight code :${this.iataCode} ${flightNum}`);

    },
};

lufthansa.book('AD-878','Harsh Priyam');
lufthansa.book('FC-975','Sujita Kumari');

const eurowrings = {
    airline: 'Eurowrings International Airlines',
    iataCode: 'EA',
    bookings: [],
};

const book = lufthansa.book;

book.call(eurowrings,23,'Ram Mishra');
console.log(eurowrings);

book.call(eurowrings,48,'Mahendra Singh Dhoni');
console.log(eurowrings);


const swiss = {
    airline: 'Swiss Airlines Private Limited',
    iataCode: 'SAPL',
    bookings: [],
};

book.call(swiss,45,'Mary Cooper');
console.log(swiss);
book.call(swiss,78,'Shahrukh Khan');
console.log(swiss);

const flightData = [456 , 'Rajendra Prasad Mishra'];
book.apply(swiss,flightData);
console.log(swiss);

book.call(swiss,...flightData);
