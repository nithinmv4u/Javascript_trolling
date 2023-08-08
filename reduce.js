const arr = [4, 3, 6, 2, 8]

const output_sum = arr.reduce(function(acc,cur){
    acc = acc + cur;
    return acc;
}, 0)

const output_max = arr.reduce(function(acc, cur){
    acc = acc>cur ? acc : cur;
    return acc;
},0)

console.log(output_sum);
console.log(output_max);