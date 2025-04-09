const meh = "meh";
var m1 = "I am global";
let message = "Me bahar wala hu";

function hello() {
    var m2 = "I am local";
    console.log(m2);
    let message = "Hello I am Let local";
    if (true) {
        const meh = "pleh";
        let message = "Hello I am Let block local";
        console.log(meh);
        console.log(message);
    }
    console.log(message);
}

hello();
console.log(message);
console.log(m1);
console.log(meh);
console.log(m2);