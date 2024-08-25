class User3{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    #speak(){
        return "Hello"
    }
    gretting(){
        return `${this.speak()} ${this.name}`
    }
    get #getAge(){
        return this.age;
    }
    set #setAge(n){
        this.age = n;
    }
}

const persona3 = new User3("Red", 42)

console.log(persona3.gretting());
console.log(persona3.getAge);
console.log(persona3.setAge = 40);
console.log(persona3.getAge);