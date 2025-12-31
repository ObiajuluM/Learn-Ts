// Arrays
let fruits: string[] = ["apple", "banana", "cherry"];
let numbers: Array<number> = [1, 2, 3, 4, 5];

console.log("arrays");
numbers.forEach((n) => console.log(n));

// Tuples, strictly typed arrays, where each element has a specific type
let user: [number, string] = [1, "John Doe"];
console.log("tuples");
console.log(user);
user.push("new element");
console.log(user);

