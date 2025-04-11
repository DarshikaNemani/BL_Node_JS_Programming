class Person{
    constructor(first,last){
        this._first = first;
        this._last = last;
    }

    get fullName(){
        console.log("Coming from get: ", this._first, " ", this._last);
        return this._first + " " + this._last;
    }

    set fullName(full){
        const [first, last] = full.split(" ");
        this._first = first;
        this._last = last;
        console.log("Coming from set: ", first,"then", last);
    }
}

const person1 = new Person("Darshika", "Nemani");
person1.fullName = "A B";
console.log(person1.fullName);