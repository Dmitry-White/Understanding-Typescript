// Type for Function: Explicit
function returnMyName(): string {
  return 'Dmitry';
}

// Type for Function: Void
function sayHello(): void {
  console.log('Hello');
}

// Argument Type: explicit
function multiply(value1: number, value2: number): number {
  return value1 * value2;
}

// Function Type
let myMultiply: (a: number, b: number) => number;
myMultiply = multiply;
// myMultiply = sayHello; // Error!
