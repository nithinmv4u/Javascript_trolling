function Capitalise(car) {
    return car.toUpperCase()+user.age;
}

const user = {
    name:"nithin",
    age:78
}

let arr = Array.from(user.name, Capitalise, user)
console.log(arr);