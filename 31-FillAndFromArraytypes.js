const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7, 8, 9));

console.log(new Array(19));  /*This Will  Create 19 empty Spaces as With only one value it happens*/

console.log(arr.map(() => 5));

arr.fill(56);
console.log(arr);

arr.fill(18,3,5);
console.log(arr);

const y = Array.from({length:9} , (curr,i)=> i+1);
console.log(y);

