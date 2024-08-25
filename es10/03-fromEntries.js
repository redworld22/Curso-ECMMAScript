const entries = new Map([["name", "Red"], ["age", 34]]);
console.log(entries);
console.log(Object.fromEntries(entries));


// Ahora se puede cambiar de un array a un objeto
const entries2 = [
    ["name", "Sime"],
    ["age", 30],
  ];
  console.log("Array original", entries2);
  // Array origintal [ [ 'name', 'Sime' ], [ 'age', 30 ] ]
  console.log("Array transformado a object", Object.fromEntries(entries));
  // Array transformado a object { name: 'Sime', age: 30 }