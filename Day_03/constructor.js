function Student(name, regno, dept) {
    this.name = name;
    this.regno = regno;
    this.dept = dept;

    this.printName = function () {
        console.log(`Name is ${this.name}`);
    }

    this.printdeets = function () {
        console.log(`The student studies in ${this.dept} and regno is ${this.regno}`);
    }
    this.printName();
    this.printdeets();
    console.log(this);
}

let stud1 = new Student("ABC", 123, "A");