// array destructuring

let fruits = ["Apple", "Banana"];
let [a, b] = fruits;

console.log(a, fruits[1]);

let student = ["Red", "Platzi", "Desarrollo Web"];
let [nombre, universidad, escuela] = student;

console.log(nombre, student[2]);

// Object destructuring

let user = {
    username: "Red",
    age: 42
}

let { username, age } = user;

console.log(username, user.age);

let objeto = {
    name: "Red",
    edad: 42,
    redesSociales: {
        Facebook: "@redworld22",
        Instagram: "@redrobles"
    }
}

let { name, edad, redesSociales: { Facebook, Instagram } } = objeto;

console.log(name, edad, Facebook, Instagram);


// spread operator

let person = { name: "Red", age: 42 };
let country = "RD";

let data = { id: 1, ...person, country }
console.log(data);


// rest

function sum(num, ...values){
    console.log(values);
    console.log(num + values[0]);
    return num + values[0]
}

sum(1, 1, 2, 3);

const obj1 = { a:1, b:2 }
const obj2 = { ...obj1, c:3}
console.log(obj2);