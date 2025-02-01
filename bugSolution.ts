function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function multiply(a: number, b: number): number {
  return a * b;
}

function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

function performOperation(op: string, a: number, b: number): number {
  switch (op) {
    case '+': return add(a, b);
    case '-': return subtract(a, b);
    case '*': return multiply(a, b);
    case '/': return divide(a, b);
    default: throw new Error('Invalid operation');
  }
}

let result = performOperation('+', 5, 3); // 8
result = performOperation('-', 10, 4); // 6
result = performOperation('*', 7, 2); // 14
result = performOperation('/', 20, 5); // 4

console.log(result); // 4

//Improved error handling:

try {
  result = performOperation('/', 10, 0); //Throws an error
} catch (error) {
  console.error('An error occurred:', error.message);
}

//Example of handling potential string inputs:
function performOperationSafe(op: string, a: number | string, b: number | string): number | string {
  const numA = typeof a === 'string' ? parseFloat(a) : a;
  const numB = typeof b === 'string' ? parseFloat(b) : b;

  if (isNaN(numA) || isNaN(numB)) {
    return 'Invalid input';
  }

  return performOperation(op, numA, numB);
}

console.log(performOperationSafe('+', '5', '3')); //8
console.log(performOperationSafe('/', '10', '0')); //Error
console.log(performOperationSafe('+', 'abc', 3)); //Invalid input