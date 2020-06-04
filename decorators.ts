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
const printable: ClassDecorator = constructorFn => {
  constructorFn.prototype.print = function() {
    console.log('Decorators: ', this);
  };
};

@logging(true)
@printable
class SmallPlant {
  name = 'Green Plant';
}

const smallPlant = new SmallPlant();
(<any>smallPlant).print();

// Method Decorator
function editable(flag: boolean): MethodDecorator {
  return function(target, propName, descriptor) {
    console.log(`Making ${String(propName)} of ${String(target)} editable: ${flag}`);
    descriptor.writable = flag;
  };
}

class SimpleProject {
  projectName: string;

  constructor(name: string) {
    this.projectName = name;
  }

  @editable(false)
  calcBudget(): void {
    console.log(1000);
  }
}

const simpleProject = new SimpleProject('Super Project');
simpleProject.calcBudget();

// Method could be overridden without the decorator
simpleProject.calcBudget = function() {
  console.log(2000);
};
simpleProject.calcBudget();
