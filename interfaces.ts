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
