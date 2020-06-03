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
