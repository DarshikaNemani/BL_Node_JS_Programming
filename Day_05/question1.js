let ip = ['A', 'B', 'C', 'D'];
let arr = [];

for (let i = 0; i < ip.length; i++) {
    for (let j = i + 1; j < ip.length; j++) {
        arr.push(Array(`${ip[i]}, ${ip[j]}`));
    }
}

console.log(...arr);