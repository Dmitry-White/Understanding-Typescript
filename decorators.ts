function logged(constructorFn: Function) {
  console.log('Decorators: ', constructorFn);
}

@logged
class Human {
  constructor() {
    console.log('Hi!');
  }
}

// Decorator Factory
function logging(flag: boolean) {
  return flag ? logged : () => {};
}

@logging(false) // Car constructor would not be logged
class Car {}

// Advanced decorator
function printable(constructorFn: Function) {
  constructorFn.prototype.print = function() {
    console.log('Decorators: ', this);
  }
}

@logging(true)
@printable
class SmallPlant {
  name = 'Green Plant'
}

const smallPlant = new SmallPlant();
(<any>smallPlant).print();
