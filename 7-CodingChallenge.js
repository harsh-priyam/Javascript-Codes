const biodata = {
Name: 'Harsh Priyam',
RollNum: 024,
Batch: 'CSE-AIML',
Skill: 'FullStackWebDeveloper',
Email: 'harshpriyam.official@gmail.com',
Contact: 9631178431,
birthyear: 2002,
friends:  ['Sahil','Aman','Saurav'],
Dateofbirth: function () {
    console.log(this);
    return 2021 - this.birthyear;
},
Summary: function () {
    return `My Name is ${this.Name} with roll number of ${this.RollNum} in ${this.Batch} has a skill of ${this.Skill}
    has an email id of ${this.Email} & my age is ${this.Dateofbirth()}. My Best Buddies are ${this.friends} and you
    can contact me at ${this.Contact}`;
}
};

console.log(biodata.Summary());
// console.log(biodata.Dateofbirth());