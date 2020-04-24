// Type for Object: Inferred
let userData = {
  name: 'John',
  age: 24,
};
// userData = {} // Error!

// Type for Object: Explicit
let myData: { name: string; age: number } = {
  name: 'Dmitry',
  age: 25,
};
// myData = { a: 1 } // Error!

// Complex Object
let complex: { data: number[]; output: () => number[] } = {
  data: [100, 3.99, 10],
  output: function(): number[] {
    return this.data;
  },
};
// complex = {} // Error!

// Type Alias
type Complex = { data: number[]; output: () => number[] };
let anotherComplex: Complex = {
  data: [100, 3.99, 10],
  output: function(): number[] {
    return this.data;
  },
};
// anotherComplex = {} // Error!

// Union Type
let myRealAge: number | string = 25;
myRealAge = '25';
