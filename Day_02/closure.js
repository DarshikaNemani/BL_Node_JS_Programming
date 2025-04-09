function outer(){
    function inner(){
        console.log("Me inside function");
    }
    console.log("Me outside function");
    return inner;
}

const Hatt = outer();
console.log(Hatt);
console.log(Hatt());