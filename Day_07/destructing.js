const student = {
    name: "Darshika",
    age: 21,
    address: {
        city: "Bardoli",
        state: "Gujarat"
    },
    hobbies: ["Reading", "Coding", "Music"]
};

const { name, age, address, hobbies } = student;
const { state } = address;
const [a, b] = hobbies;

console.log(`${name} is ${age} years old, lives in ${state}, and enjoys ${a} and ${b}.`);