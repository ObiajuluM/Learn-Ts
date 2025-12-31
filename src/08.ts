// Null checks

type Customer = {
  birthDay?: Date;
};

// This function returns a Customer object, null, or undefined based on the input id.
function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthDay: new Date() };
}

let customer = getCustomer(0);

// Using optional chaining to safely access the birthDay property
console.log(customer?.birthDay?.getFullYear());
