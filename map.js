const arr = [2, 3, 4, 5, 6]


console.log(arr.map((x) => {return(2*x)}));
console.log(arr.map(x => 3*x));
console.log(arr.map(x => x.toString(2)));
/*
const double = (x) => 2*x;
const tripple = x => 3*x;
const binary = (x) => x.toString(2);

console.log(arr.map(double));
console.log(arr.map(tripple));
console.log(arr.map(binary));
*/