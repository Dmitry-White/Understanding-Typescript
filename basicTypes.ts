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

// Type: Numeric Enum
enum Colour {
  Gray,
  Green,
  Blue,
}
// Reverse Mapping of Numeric Enum
// Numeric value
let myFirstColour: Colour = Colour.Blue; // 2
// Name of the numeric value
let mySecondColour: string = Colour[1]; // "Green"

// Type: String Enum
enum Direction {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT',
}
// No Reverse Mapping for String Enum
// String value
let myFirstDirection: Direction = Direction.Up; // "UP"
// Name of the String value
let mySecondDirection: string = Direction[1]; // undefined

// Type: any
let myCar: any = 'BMW';
myCar = { model: 'BMW', series: 3 };

// Type: null
let canBeNull: number | null = 42;
canBeNull = null;

let canAlsoBeNull;
canAlsoBeNull = null;

let canOnlyBeNull: null;
// canOnlyBeNull = 42; // Error!

let cantBeNull: number = 42;
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
  mySecondDirection,
  myCar,
]);
