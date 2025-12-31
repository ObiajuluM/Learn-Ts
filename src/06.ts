// Union Type Example

function kgToLbs(weight: number | string): number {
  // Narrowing
  if (typeof weight === "number") {
    // weight is of type number
    return weight * 2.20462;
  } else {
    // weight is of type string
    return parseInt(weight) * 2.20462;
  }
}
console.log(kgToLbs(10)); // number input
console.log(kgToLbs("10kg1")); // string input

// Intersection Type Example

type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

// Type Intersection
type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
  drag: () => {
    console.log("Dragging");
  },
  resize: () => {
    console.log("Resizing");
  },
};
