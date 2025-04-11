function Employee(name, salary){
    this.name = name;
    this.salary = salary;

    this.printdeets();
    console.log(this);
}

Employee.prototype.printdeets = function(){
    console.log(`Employee name is ${this.name} and salary is ${this.salary}`);
}

let emp = new Employee("ABC", 123);