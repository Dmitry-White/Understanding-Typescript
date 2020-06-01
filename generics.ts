// Simple Generic
function echo(data: any): any {
  return data;
}

console.log(echo('Dmitry'));
console.log(echo(25));
console.log(echo({ name: 'Dmitry', age: 25 }));

// Better Generic
function betterEcho<T>(data: T) {
  return data;
}

console.log(betterEcho('Dmitry'));
console.log(betterEcho<number>(25));
console.log(betterEcho({ name: 'Dmitry', age: 25 }));

// Built-in Generics
const testResults: Array<number> = [1.54, 2.33];
testResults.push(-2.99);

console.log('Generics: ', testResults);

// Array Generics
function printAll<T>(args: T[]) {
  args.forEach(element => console.log(element));
}

printAll<string>(['Apple', 'Banana']);

// Generic Types
type EchoFunc = <T>(data: T) => T;

const echo2: EchoFunc = betterEcho;
// Generic type EchoFunc prevents assignment of differently typed functions
// const echo3: EchoFunc = printAll;

console.log(echo2<number>(2));

// Generic Class
class SimpleMath<T extends number | string, U extends number | string> {
  baseValue: T;
  multiplyValue: U;
  calculate(): number {
    return +this.baseValue * +this.multiplyValue;
  }
}

const simpleMath = new SimpleMath<number, string>();
simpleMath.baseValue = 10;
// simpleMath.baseValue = 'something'; // OK, but the result is NaN
// simpleMath.baseValue = false; // Compilation Error
simpleMath.multiplyValue = '20';

console.log('Generic Class: ', simpleMath.calculate());
