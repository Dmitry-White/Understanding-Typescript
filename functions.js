// Type for Function: Explicit
function returnMyName() {
    return 'Dmitry';
}
// Type for Function: Void
function sayHello() {
    console.log('Hello');
}
// Argument Type: explicit
function multiply(value1, value2) {
    return value1 * value2;
}
// Function Type
var myMultiply;
myMultiply = multiply;
// myMultiply = sayHello; // Error!
// Type for Function: Never
function error(message) {
    throw new Error(message);
}
function infiniteLoop() {
    while (true) {
        console.log('Working!');
    }
}
// Strict Compiler Options
// NoUnusedParameters & NoUnusedLocal
function control(isTrue /*somethingElse: boolean */) {
    var result;
    // let total: number; // Error!
    if (isTrue) {
        result = 42;
    }
    result = 41;
    return result;
}
