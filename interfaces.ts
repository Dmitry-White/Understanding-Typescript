// Interfaces in General
interface NamedPerson {
  firstName: string;
  age?: number;
  [propName: string]: any; // dynamic - for unknown, but possibly present properties
  greet(lastName: string): void;
}

function greet(person: NamedPerson) {
  console.log(`Interfaces: Hello, ${person.firstName}`);
}

function changeName(person: NamedPerson) {
  person.firstName = 'Viktoria';
}

// Interfaces for Objects

// Event if "age" is not present in NamedPerson interface
// (even in age? format or "[key: string]: any" format),
// variable-assigned objects will not be checked as strictly
// as literally the same object literal
const personData: NamedPerson = {
  firstName: 'Dmitry',
  age: 25,
  hobbies: ['Music', 'Sports'],
  greet(lastName: string): void {
    console.log(`Interfaces: Hi, I am ${this.firstName} ${lastName}`);
  },
};

greet(personData);
changeName(personData);
greet(personData);
personData.greet('White');

// Interfaces for Classes

// Class could contain additional methods and properties
// not present in the interface
class PersonClass implements NamedPerson {
  firstName: string;
  greet(lastName: string): void {
    console.log(`Interfaces: Hi, I am ${this.firstName} ${lastName}`);
  }
}

const myPerson = new PersonClass();
myPerson.firstName = 'Dima';
greet(myPerson);
myPerson.greet('The Great');

// Interfaces for Function Types

interface DoubleValueFunc {
  (number1: number, number2: number): number;
}

const doubleFunc: DoubleValueFunc = function(value1, value2) {
  return (value1 + value2) * 2;
};

console.log('Interfaces for function type:', doubleFunc(10, 20));

// Interfaces for Array Types

interface NumList {
  [index: number]: number;
}

const numArr: NumList = [1, 2, 3];

// numArr.push(1) // no "push" method in NumList

// Instead use Array<...> to have all the Array methods and properties

type NumItem = number;
interface NumItems extends Array<NumItem> {}
// type NumItems = NumItem[];

const arr: NumItems = [1, 2, 3];

arr.push(4);

console.log('Interfaces for array type:', { numArr, arr });
