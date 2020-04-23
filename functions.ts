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

// Type for Function: Never
function error(message: string): never {
  throw new Error(message);
}
function infiniteLoop(): never {
  while (true) {
    console.log('Working!');
  }
}

// Strict Compiler Options
// NoUnusedParameters & NoUnusedLocal
function control(isTrue: boolean /*somethingElse: boolean */): number {
  let result: number;
  // let total: number; // Error!
  if (isTrue) {
    result = 42;
  }
  result = 41;
  return result;
}
