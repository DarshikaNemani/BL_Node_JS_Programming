const student = {
    name: "Darshika",
    age: 21,
    address: {
        city: "Bardoli",
        state: "Gujarat"
    },
    hobbies: ["Reading", "Coding", "Music"]
};

const { name, age, address: {state}, hobbies: [a,b] } = student;

console.log(`${name} is ${age} years old, lives in ${state}, and enjoys ${a} and ${b}.`);