// Type: inferred
var myName = 'Dmitry';
myName = 'Dima';
// Type: string
var mySurname = 'Beloichuk';
mySurname = 'White';
// Type: number
var myAge = 24;
myAge = 25;
// Type: boolean
var hasHobbies = false;
hasHobbies = true;
// Type: array
var hobbies = ['piano', 'electronics'];
hobbies = [];
// Type: tuple
var address = ['Hello Drive', 42];
address = ['Privet Drive', 4];
// Type: Numeric Enum
var Colour;
(function (Colour) {
    Colour[Colour["Gray"] = 0] = "Gray";
    Colour[Colour["Green"] = 1] = "Green";
    Colour[Colour["Blue"] = 2] = "Blue";
})(Colour || (Colour = {}));
// Reverse Mapping of Numeric Enum
// Numeric value
var myFirstColour = Colour.Blue; // 2
// Name of the numeric value
var mySecondColour = Colour[1]; // "Green"
// Type: String Enum
var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
    Direction["Left"] = "LEFT";
    Direction["Right"] = "RIGHT";
})(Direction || (Direction = {}));
// No Reverse Mapping for String Enum
// String value
var myFirstDirection = Direction.Up; // "UP"
// Name of the String value
// let mySecondDirection: string = Direction[1]; // undefined or Error (noImplicitAny)
// Type: any
var myCar = 'BMW';
myCar = { model: 'BMW', series: 3 };
// Type: null
var canBeNull = 42;
canBeNull = null;
var canAlsoBeNull;
canAlsoBeNull = null;
var canOnlyBeNull;
// canOnlyBeNull = 42; // Error!
var cantBeNull = 42;
// cantBeNull = null; // Error!
console.info([
    myName,
    mySurname,
    myAge,
    hasHobbies,
    hobbies,
    address,
    myFirstColour,
    mySecondColour,
    myFirstDirection,
    myCar,
]);
