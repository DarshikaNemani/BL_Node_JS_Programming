(function () {
    let x = Math.floor((Math.random() * 100) + 1);
    if (x % 2 == 0) {
        console.log(x, "Even");
    }
    else {
        console.log(x, "Odd");
    }
})();