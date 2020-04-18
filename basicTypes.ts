// Type: inferred
let myName = 'Dmitry';
myName = 'Dima';

// Type: string
let mySurname: string = 'Beloichuk';
mySurname = 'White';

// Type: number
let myAge: number = 24;
myAge = 25;

// Type: boolean
let hasHobbies: boolean = false;
hasHobbies = true;

// Type: array
let hobbies: string[] = ['piano', 'electronics'];
hobbies = [];

// Type: tuple
let address: [string, number] = ['Hello Drive', 42];
address = ['Privet Drive', 4];

// Type: enum
enum Colour {
  Gray,
  Green,
  Blue,
}
// Enum: Numeric value
let myFirstColour: Colour = Colour.Blue;
// Enum: Name of the numeric value
let mySecondColour: string = Colour[1];

// Type: any
let myCar: any = 'BMW';
myCar = { model: 'BMW', series: 3 };

console.info([myName, mySurname, myAge, hasHobbies, hobbies, address, myFirstColour, mySecondColour, myCar]);
