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
