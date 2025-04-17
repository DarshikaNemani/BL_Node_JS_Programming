function Name(){
    return function print(name){
        console.log(name);
    }
}

const name1 = Name();
name1('Darshika');