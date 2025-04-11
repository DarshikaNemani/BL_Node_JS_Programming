class Person {
    constructor(name) {
        this.name = name;
        console.log("constuctor: ", this.name);
    }

    static Name(name){ // Using Static keyword
        console.log("Static:", name);
    }
}

Person.Name2 = function(name2){ // Without static keyword
    console.log("Dusra static: ", name2);
}

const person1 = new Person ("Darshika")
Person.Name("ABCD");
Person.Name2("XYZ")
person1.Name("ABCD"); //Gives error because static belongs to class and not object.