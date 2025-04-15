function greet(name) {
    console.log(`Hello! ${name}.`)
}

function logExecution(func) {
    return function (name) {
        console.log("Method Started");
        const result = func.apply(this,[name]); //Forwarding here with this and name
        console.log("Method Ended");
        return result;
    }
}

const g = logExecution(greet);
g('Darshika');