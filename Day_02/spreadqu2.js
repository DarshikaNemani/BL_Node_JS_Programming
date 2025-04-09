const deptA = { 101: "Alice", 102: "Bob" };
const deptB = { 102: "Bobby", 103: "Charlie" };
const deptC = { 104: "David", 101: "Alicia" };

const dept = {...deptA,...deptB,...deptC};

console.log(dept);