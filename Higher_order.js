const radius = [3, 1, 2, 4];

const area = function (radius_){
    return Math.PI * radius_*radius_
}

const circumferance = function (radius_){
    return 2*Math.PI * radius_
}

const diameter = function (radius_){
    return 2 * radius_
}

const calculate = function(radius, logic){
    const output = [];
    for(let i=0; i<radius.length;i++){
        output.push(logic(radius[i]));
    }
    return output
}

console.log(calculate(radius,area));
console.log(calculate(radius,circumferance));
console.log(calculate(radius,diameter));
/*
const calculateArea = function(radius){
    const output = [];
    for(let i=0; i<radius.length;i++){
        output.push(Math.PI * radius[i]*radius[i]);
    }
    return output
}

console.log(calculateArea(radius));

const calculateCircumferance = function(radius){
    const output = [];
    for(let i=0; i<radius.length;i++){
        output.push(2*Math.PI * radius[i]);
    }
    return output
}

console.log(calculateCircumferance(radius));

const calculateDiameter = function(radius){
    const output = [];
    for(let i=0; i<radius.length;i++){
        output.push(2* radius[i]);
    }
    return output
}

console.log(calculateDiameter(radius));
*/