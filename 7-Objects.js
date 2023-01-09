const biodata = {
    Name: 'Harsh Priyam',
    Skillset: 'Full Stack Web Developer',
    Occupation: 'Student',
    Email: 'harshpriyam.official@gmail.com',
    Contact: 9631178431
};


console.log(biodata.Contact);


const choice = prompt(`Enter your Choice For the Personal Data: Name , Skillset , Occupation , Email , Contact`);


if (biodata[choice]) {
    console.log(biodata[choice]);
}
else {
    console.log(`Invalid Choice Buddy!!`)
}