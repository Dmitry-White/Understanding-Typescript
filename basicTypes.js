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
// Type: enum
var Colour;
(function (Colour) {
    Colour[Colour["Gray"] = 0] = "Gray";
    Colour[Colour["Green"] = 1] = "Green";
    Colour[Colour["Blue"] = 2] = "Blue";
})(Colour || (Colour = {}));
// Enum: Numeric value
var myFirstColour = Colour.Blue;
// Enum: Name of the numeric value
var mySecondColour = Colour[1];
// Type: any
var myCar = 'BMW';
myCar = { model: 'BMW', series: 3 };
console.info([myName, mySurname, myAge, hasHobbies, hobbies, address, myFirstColour, mySecondColour, myCar]);
