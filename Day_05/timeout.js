function greet(Name){
    console.log(`Welcome! ${Name}.`)
}

let timer = setTimeout(greet,5000,'Darshika Nemani');

clearTimeout(timer);