var Employee = /** @class */ (function () {
    function Employee(id, name, address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }
    Employee.prototype.getNameWithAdd = function () {
        return this.name + " " + this.address;
    };
    return Employee;
}());
var john = new Employee(1, 'John', 'ABC Lane');
var address = john.getNameWithAdd();
console.log(address);
