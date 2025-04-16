let a = "aaabbccc";
let b = new Set(a);
let arr = [];
let bArr = Array.from(b);

for (let i = 0; i < bArr.length; i++) {
    for (let j = i + 1; j < bArr.length; j++) {
        arr.push(bArr[i] + bArr[j]); 
    }
}

console.log(arr);