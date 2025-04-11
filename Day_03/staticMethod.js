class Person {
    constructor(name) {
        this.name = name;
        console.log("constuctor: ", this.name);
    }

    static Name(name){
        console.log("Static:", name);
    }
}

const person1 = new Person ("Darshika")
Person.Name("ABCD");
person1.Name("ABCD"); //Gives error because static belongs to class and not object.