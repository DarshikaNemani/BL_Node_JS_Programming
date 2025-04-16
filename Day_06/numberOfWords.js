let ip = ["apple", "banana", "mango"];
let op = [];

for (let i of ip){
    let st = new Set(i);
    let prod = 1;
    for (let j = 0; j<st.size;j++){
        prod *= (j+1);
    }
    op.push(prod);
}

console.log(op);