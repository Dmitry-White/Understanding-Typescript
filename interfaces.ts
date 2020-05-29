interface NamedPerson {
  firstName: string;
}

function greet(person: NamedPerson) {
  console.log(`Interface: Hello, ${person.firstName}`);
}

function changeName(person: NamedPerson) {
  person.firstName = 'Viktoria'
}

const personData = {
  firstName: 'Dmitry',
  age: 25
}

greet(personData);
changeName(personData);
greet(personData);
