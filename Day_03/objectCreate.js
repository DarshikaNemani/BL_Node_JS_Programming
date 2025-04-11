class People{
    constructor(name){
        this.name = name;
    }

    printName(){
        console.log(this.name, " ", this.age);
    }
}

let properties ={
    name:{
        value: "Darshika"
    },
    age:{
        value: 21
    }
}

let Darshika = Object.create(People.prototype, properties);
Darshika.printName();