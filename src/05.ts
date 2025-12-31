// Objects

// type
type Employee = {
  readonly id: number; // read-only property
  name?: string; // optional property
  retire: (date: Date) => void; // method
};

// Structure of the object
let employee: Employee = {
  id: 1,
  name: "John Doe",
  retire: (date: Date) => {
    console.log(`Employee retired on ${date}`);
  },
};

console.log(`id: ${employee.id}`);
