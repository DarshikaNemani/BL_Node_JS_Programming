let fullName = {
    first: "Darshika",
    last: "Nemani",
    getName: function(){
       return this.first + " " + this.last;
    }
}

function printName(place, stay){
    console.log(`Her full name is ${this.getName()}.`);
    console.log(`She lives at ${stay} in ${place}`);
}

let name = printName.bind(fullName);

printName.call(fullName, 'Bardoliii', 'Home');

printName.apply(fullName,[ 'Bardoli', 'Homeee']);

name('Bardoli', 'Home');