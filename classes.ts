// Type for Class: definition
class Person {
  name: string;

  private type = 'human';

  protected age: number;

  constructor(name: string, public username: string) {
    this.name = name;
    console.log('Type: ', this.type);
  }

  printAge() {
    console.log(this.age);
    this.setType('cool human');
  }

  private setType(type: string) {
    this.type = type;
    console.log('Type: ', this.type);
  }
}

const person = new Person('Dmitry', 'Dmitry-White');
console.log('Person: ', person);

// Type for Class: public vs private properties
console.log('Username: ', person.username);
// console.log(person.type); // Won't work with private properties

// Type for Class: public vs private methods
person.printAge();
// person.setType('cool guy'); // Won't work with private methods

// Type for Class: inheritance
class Dmitry extends Person {
  constructor(username: string) {
    super('Dmitry', username);
    console.log('Age: ', this.age); // Works with protected properties from parent
    // console.log('Type: ', this.type); // Won't work with private properties
  }
}

const dmitry = new Dmitry('DmitryWhite');
console.log('Dmitry: ', dmitry);

// Type for Class: public vs protected properties
console.log('Username: ', dmitry.username);
// console.log(dmitry.age); // Won't work with private properties
