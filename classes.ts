class Person {
  name: string;
  private type: string = 'human';
  protected age: number;
  
  constructor(name: string, public username: string) {
    this.name = name;
    console.log('Type: ', this.type);
  }
}

const person = new Person('Dmitry', 'Dmitry-White');
console.log('Person: ', person);