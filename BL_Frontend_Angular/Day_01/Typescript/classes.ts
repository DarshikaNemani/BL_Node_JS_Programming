class Employee {
    id: number;
    name: string;
    address: string;
    constructor(id: number, name: string, address: string) {
        this.id = id;
        this.name = name;
        this.address = address;
    }
    getNameWithAdd(): string{
        return this.name + " " + this.address;
    }
}

let john = new Employee(1, 'John', 'ABC Lane');
let address = john.getNameWithAdd();
console.log(address);