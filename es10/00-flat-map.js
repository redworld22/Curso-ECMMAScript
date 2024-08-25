// flat

const array = [1,1,2,3,4, [1,3,5,6,[1,2,4]]];
console.log(array.flat(3));


// flatmap
const array2 = [3,7,12,14,19];
console.log(array2.flatMap(value => [value, value * 2]));

