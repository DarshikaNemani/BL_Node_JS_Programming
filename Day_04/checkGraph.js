let x = [2, 3,1,2,3,1,2,3,1];
let n = x.length;
let count = 0;

for (let i = 1; i < n - 1; i++) {
    if ((x[i - 1] < x[i] && x[i] < x[i + 1]) || (x[i - 1] > x[i] && x[i] > x[i + 1])) {
        continue;
    }
    else {
        console.log("Peak/valley at:", x[i]);
        count++;
    }
}
console.log("Total:", count);