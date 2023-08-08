const radius = [3, 1, 2, 4];

const area = (radius_) => Math.PI * radius_*radius_

const circumferance = (radius_) => 2*Math.PI * radius_

const diameter = (radius_) => 2 * radius_

const calculate = function(radius, logic){
    const output = [];
    for(let i=0; i<radius.length;i++){
        output.push(logic(radius[i]));
    }
    return output
}

// use map and also implement our own map with Array.prototype and this operator

console.log(calculate(radius,area));
console.log(calculate(radius,circumferance));
console.log(calculate(radius,diameter));