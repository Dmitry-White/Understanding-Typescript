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

// Type for Class: getters & setters
class Plant {
  private speciesName = 'Default';

  get species() {
    return this.speciesName;
  }

  set species(value: string) {
    if (value.length > 3) {
      this.speciesName = value;
    } else {
      this.speciesName = 'Default';
    }
  }
}

const plant = new Plant();
console.log('Initial: ', plant.species);
plant.species = 'AB';
console.log('Before: ', plant.species);
plant.species = 'Green Plant';
console.log('After: ', plant.species);

// Type for Class: static properties & methods
class Helper {
  static PI = 3.14;

  static calcCircumference(diameter: number) {
    return this.PI * diameter;
  }
}

console.log('PI: ', Helper.PI);
console.log('Circumference: ', Helper.calcCircumference(8));

// Type for Class: abstract
abstract class Project {
  projectName = 'Default';

  budget = 1000;

  abstract changeName(name: string): void;

  calcBudget() {
    return this.budget * 2;
  }
}

class ITProject extends Project {
  changeName(name: string) {
    this.projectName = name;
  }
}

// const project = new Project(); // Cannot create an instance of an abstract class
const itProject = new ITProject();
console.log('IT Project before: ', itProject);
itProject.changeName('Google');
console.log('IT Project after: ', itProject);

// Type for Class: private constructor & readonly properties
class OnlyOne {
  private static instance: OnlyOne;

  public readonly name: string;

  private constructor(name: string) {
    this.name = name;
  }

  static getInstance(name: string) {
    if (!OnlyOne.instance) {
      OnlyOne.instance = new OnlyOne(name);
    }
    return OnlyOne.instance;
  }
}

// const wrong = new OnlyOne('The Only One'); // Constructor is private
const first = OnlyOne.getInstance('Singleton 1');
console.log('Singleton 1: ', first);
const second = OnlyOne.getInstance('Singleton 2');
console.log('Singleton 2: ', second);

// second.name = 'Singleton'; / Property is readonly
