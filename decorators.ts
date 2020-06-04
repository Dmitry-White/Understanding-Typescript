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

// Property Decorator
function overwritable(flag: boolean): PropertyDecorator {
  return function(target, propName) {
    console.log(`Making ${String(propName)} of ${String(target)} overwritable: ${flag}`);
    const newDescriptor: PropertyDescriptor = {
      writable: flag,
    };
    return newDescriptor;
  };
}

class SimpleProject {
  @overwritable(false)
  projectName = 'Default';

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
// If overwritable descriptor is set to "false",
// than even the constructor call would not be able to set a new value
console.log('Property Descriptor: ', simpleProject.projectName);

// Parameter Decorator
const printInfo: ParameterDecorator = (target, methodName, paramIndex) => {
  console.log('Target: ', target);
  console.log('Method Name: ', methodName);
  console.log('Param Index: ', paramIndex);
};
class Course {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  printStudentNumbers(mode: string, @printInfo printAll: boolean) {
    console.log('Mode: ', mode);
    if (printAll) {
      console.log(10000);
    } else {
      console.log(2000);
    }
  }
}

const course = new Course('Super Course');
course.printStudentNumbers('anything', true);
course.printStudentNumbers('anything', false);
