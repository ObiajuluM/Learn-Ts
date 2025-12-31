// Functions

function calculateTax(income: number, taxYear?: number): number {
  if (taxYear! < 50_000) { // statement is not null
//   if (taxYear! < 50_000) {
    return income * 1.2;
  }
  return income * 1.3;
}

console.log(calculateTax(100_000, 2022));
