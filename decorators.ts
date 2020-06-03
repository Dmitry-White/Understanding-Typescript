function logged(constructorFn: Function) {
  console.log('Decorators: ', constructorFn);
}

@logged
class Human {
  constructor() {
    console.log('Hi!');
  }
}
