var m1 = "I am global";

function hello() {
    var m2 = "I am local";
    console.log(m2);
}

hello();

console.log(m1);
console.log(m2);