interface NamedPerson {
  firstName: string;
  age?: number;
  [propName: string]: any; // dynamic - for unknown, but possibly present properties
}

function greet(person: NamedPerson) {
  console.log(`Interface: Hello, ${person.firstName}`);
}

function changeName(person: NamedPerson) {
  person.firstName = 'Viktoria';
}

// Event if "age" is not present in NamedPerson interface
// (even in age? format or "[key: string]: any" format),
// variable-assigned objects will not be checked as strictly
// as literally the same object literal
const personData = {
  firstName: 'Dmitry',
  age: 25,
  hobbies: ['Music', 'Sports']
};

greet(personData);
changeName(personData);
greet(personData);
