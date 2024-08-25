
// clase
class User {}

// instancia de una clase
const redRD = new User()

class usuario {
    // métodos
    gretting(){
       return "Hello";
    }
}

const persona1 = new usuario()
console.log(persona1.gretting());

const bebeloper = new usuario();
console.log(bebeloper.gretting());


// constructor

class User1{
    // Constructor
    constructor(){
        console.log("Nuevo Usuario");
    }
    gretting(){
        return "Hello";
    }
}

const persona2 = new User1()


// this

class User2{
    constructor(name){
        this.name = name;
    }
    speak(){
        return "Hello"
    }
    gretting(){
        return `${this.speak()} ${this.name}`;
    }
}

const red = new User2("Red")
console.log(red.gretting());

// setters y getters

class User3{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    speak(){
        return "Hello"
    }
    gretting(){
        return `${this.speak()} ${this.name}`
    }
    get getAge(){
        return this.age;
    }
    set setAge(n){
        this.age = n;
    }
}

const persona3 = new User3("Red", 42)

console.log(persona3.gretting());
console.log(persona3.getAge);
console.log(persona3.setAge = 40);
console.log(persona3.getAge);

