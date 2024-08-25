const regex = /\b(Apple)+\b/g;
const fruit = "Apple, Banana, Kiwi, Apple, Orange, Lemon";


const result = fruit.matchAll(regex)
console.log(result);


for (const match of fruit.matchAll(regex)) {
    console.log(match);
}

// Tranformación del iterable retornado a array
const array = [...fruit.matchAll(regex)]
console.log(array)