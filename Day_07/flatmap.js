let text = "Hello, Darshika!"
let num = [1,2,[3,4]]
let meh = text.split(",").flatMap(x => x.split(""));
let mehe = num.flat(1);
console.log(meh);
console.log(mehe);