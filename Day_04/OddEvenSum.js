(function () {
    let num = [12, 7, 9, 20, 33];
    let even = 0, odd = 0, sum = 0;

    for (let x of num) {
        if (x % 2 === 0) {
            even++;
        } else {
            odd++;
        }
        sum += x;
    }

    console.log({ even, odd, sum });
})();