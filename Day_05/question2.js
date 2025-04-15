let ip = ["aaabbcd", "abc", "aaa"];
let op = [];
for (let str of ip) {
    let st = new Set(str);
    let len = st.size;
    function factorial(n) {
        if (n == 0) {
            return 1;
        }
        return n * factorial(n - 1);
    }
    op.push(factorial(len));
}
console.log(...op);