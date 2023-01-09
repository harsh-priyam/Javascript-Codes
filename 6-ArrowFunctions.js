// const Myage = birthYear => 2021 - birthYear;
// let age = Myage(2004);
// console.log(age);

const RetirementAge = (birthyear,Myname)=>
{
    let age = 2021 - birthyear;
    let ret_age = 60 - age;
    return (`${Myname} will retire from his professional Job in ${ret_age} years `);
}

let data = RetirementAge(2000,'Harsh Priyam');
console.log(data);