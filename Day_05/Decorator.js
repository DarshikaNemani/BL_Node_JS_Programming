function greet(name) {
    console.log(`Hello! ${name}.`)
}

function logExecution(func) {
    return function (name) {
        console.log("Method Started");
        func(name);
        console.log("Method Ended");
    }
}

const g = logExecution(greet);
g('Darshika');