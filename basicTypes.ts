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

console.info([myName, mySurname, myAge, hasHobbies, hobbies, address]);
