let MarkWeight = 73 ;
let JhonWeight = 81 ;

let MarkHeight = 2.1;
let JhonHeight = 1.9;

let MarksBMI = MarkWeight/MarkHeight ** 2;
let JhonsBMI = JhonWeight/JhonHeight ** 2;

console.log("Mark's BMI = ",MarksBMI);
console.log("Jhon's BMI = ",JhonsBMI);

if (MarksBMI > JhonsBMI) {
    console.log(`Mark's BMI ${MarksBMI} is more than the Jhon's BMI ${JhonsBMI}`);
}
else{
    console.log(`Jhon's BMI ${JhonsBMI} is more than the Mark's BMI ${MarksBMI}`);
}