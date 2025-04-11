class Animal{
    constructor(name){
        this.name = name;
    }
    makeSound(){
        console.log(`Some generic Sound!`);
    }
}

class Dog extends Animal{
    makeSound(){
        console.log(this.name, "Bark!")
    }
}

const Bruno = new Dog("Bruno");
Bruno.makeSound();