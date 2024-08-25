const list = new Set();

list.add("item 1")
list.add("item2").add("item3")

console.log(list);



const array = [1, 1, 2, 3, 3, 4, 4, 4, 5];

const arraySinRepeticion = [...new Set(array)]
console.log(arraySinRepeticion);



const set = new Set();
set.add('item 1');               // set ['item 1']
set.add('item 2').add('item 3'); // set ['item 1','item 2','item 3']
set.has('item 2');               // true
set.delete('item 1');            // set ['item 2','item 3']                    
set.size;                        // 2

console.log(set.has("item 2"));



//Set y add
const list1 = new Set();

list1.add('Item 1');
list1.add('Item 2');
//Set no permite agregar elementos repetidos
list1.add('Item 2');

let i = 0;
for (let element of list1) {
    if (i == 0) {
    console.log(`[${i}] = ${element}`);
    i++;
  }
}
