// object destructuring
// array destructuring
 

interface User {
    firstName: string;
    lastName: string;
    age?: number; // optional
}

const user: User = {
    firstName: "Shihab",
    lastName: "Shamim",
    age: 22
};

// Normal destructuring
const { firstName, lastName } = user;
console.log(firstName); // Shihab
console.log(lastName);  // Shamim

// Renaming variables
const { firstName: fName, lastName: lName } = user;
console.log(fName, lName);



// Using rest operator
const { age, ...rest } = user;
console.log(age);  // 22
console.log(rest); // { firstName: "Shihab", lastName: "Shamim" }
