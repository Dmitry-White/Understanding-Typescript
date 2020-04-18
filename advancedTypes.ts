// Type for Object: Inferred
let userData = {
  name: 'John',
  age: 24,
};
// userData = {} // Error!

// Type  for Object: Explicit
let myData: { name: string; age: number } = {
  name: 'Dmitry',
  age: 25,
};
// myData = { a: 1 } // Error!

// Complex Object
let complex: { data: number[]; output: (all: boolean) => number[] } = {
  data: [100, 3.99, 10],
  output: function(all: boolean): number[] {
    return this.data;
  },
};
// complex = {} // Error!
