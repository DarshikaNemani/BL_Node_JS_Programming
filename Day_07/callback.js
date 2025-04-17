function processUserInput(name, callback){
    callback(name);
}

function display(name1){
    console.log(`Hello, ${name1}! Welcome to the system.`)
}

processUserInput("Darshika", display);