let deptA = ['Alice', 'Bob'];
let deptB = ['Charlie', 'David'];

let newJoinerA = 'Eve';
let newJoinerB = 'Frank';
let newArr=['Manager', ...deptA, newJoinerA, ...deptB, newJoinerB, "Intern"]
console.log(newArr)