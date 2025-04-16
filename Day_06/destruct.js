let arr = ['A', 'B', 'C', 'D', 'E'];

let [a,b,...rest] = arr;

console.log(a);
console.log(b);
console.log(rest);