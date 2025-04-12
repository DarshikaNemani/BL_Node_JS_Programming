class Employee{
    constructor(name, id){
        this.name = name;
        this.id = id;
    }
    displayDetails(){
        console.log(`Employee name is ${this.name}`);
        console.log(`Employee id is ${this.id}`);
    }
}

class Manager extends Employee{
    constructor(name, id, dept){
        super(name, id);
        this.dept = dept;
    }
    displayDetails(){
        console.log(`Employee name is ${this.name}`);
        console.log(`Employee id is ${this.id}`);
        console.log(`Employee Department is ${this.dept}`);
    }
}

const emp1 = new Manager("ABC", 123, "XYZ");
emp1.displayDetails();