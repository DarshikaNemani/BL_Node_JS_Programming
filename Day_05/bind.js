let fullName = {
    first: "Darshika",
    last: "Nemani",
    getName: function(){
       return this.first + " " + this.last;
    }
}

function printName(){
    console.log(`Her full name is ${this.getName()}.`);
}

let name = printName.bind(fullName);

name(); 