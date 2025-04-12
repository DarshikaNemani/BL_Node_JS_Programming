let nickname;
let email;
let verified = Math.floor((Math.random()*2)%2);

console.log("Welcome!", nickname || "Guest");
console.log("Email:", email ?? "Email ID not found!");
verified && console.log("Access Granted");