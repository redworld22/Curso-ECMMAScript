function* iterate(array){
    for (const value of array) {
        yield value;
    }
}

const it = iterate(["Red", "Florangel", "Mabel", "Amado", "Jenson", "Dahiana"]);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
