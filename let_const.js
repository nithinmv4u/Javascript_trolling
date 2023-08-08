let j =10;
const k = 12;
for(var i=0;i<5;i++){
    let j=5 //scope only inside loop
}
console.log(i);
console.log(j);
j=j+1;
console.log(j);
console.log(k);
//k=++k can't be changed