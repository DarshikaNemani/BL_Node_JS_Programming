class Emp{
    constructor(name){
        this.name = name;
        this.printName();
    }

    printName(){
        console.log(this.name);
    }
}

const meh = new Emp('Meh');