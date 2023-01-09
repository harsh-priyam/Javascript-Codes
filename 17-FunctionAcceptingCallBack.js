const upperFirstWord = function (str) {
    return [str.toUpperCase()];
}
const transformer = function (str, fn) {
    console.log(`Orignal String : ${str}`);
    console.log(`Transformed String : ${fn(str)}`);

    console.log(`Transformed By the Function : ${fn.name}`);
}

transformer('This is Harsh Priyam...!! Signing In', upperFirstWord); 