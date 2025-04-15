function sum(str) {
    if (str.length === 0) {
        return 0;
    }
    return Number(str[0]) + sum(str.slice(1));
}

console.log(sum("1234"));