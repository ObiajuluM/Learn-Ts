// Literal Types

// Literal types allow you to specify exact values a variable can hold.

type Quantity = 10 | 12; // Literal type that can only be 10 or 12
let quantity: Quantity = 12; // 'quantity' can only be the number 10

//
//
// Nullable Types
// Nullable types allow a variable to hold either a specific type or null/undefined.
function greet(name: string | null): string {
  if (name === null) {
    return "Hello, Guest!";
  } else {
    return `Hello, ${name}!`;
  }
}

console.log(greet("Alice")); // Output: Hello, Alice!
console.log(greet(null)); // Output: Hello, Guest!
