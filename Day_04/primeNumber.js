(function () {
    let x = Math.floor((Math.random() * 100) + 1);
    
    function isPrime(n) {
        if (n <= 1) return false;
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) return false;
        }
        return true;
    }

    if (isPrime(x)) {
        console.log(x, "Prime Number");
    } else {
        console.log(x, "Not Prime Number");
    }
})();