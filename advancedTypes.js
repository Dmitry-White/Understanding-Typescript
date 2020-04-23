// Type for Object: Inferred
var userData = {
    name: 'John',
    age: 24,
};
// userData = {} // Error!
// Type  for Object: Explicit
var myData = {
    name: 'Dmitry',
    age: 25,
};
// myData = { a: 1 } // Error!
// Complex Object
var complex = {
    data: [100, 3.99, 10],
    output: function () {
        return this.data;
    },
};
var anotherComplex = {
    data: [100, 3.99, 10],
    output: function () {
        return this.data;
    },
};
// anotherComplex = {} // Error!
// Union Type
var myRealAge = 25;
myRealAge = '25';
