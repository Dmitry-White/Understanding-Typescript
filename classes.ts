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

person.printAge();
// person.setType('cool guy'); // Won't work with private methods
