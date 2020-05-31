// Simple Generic
function echo(data: any): any {
  return data;
}

console.log(echo('Dmitry'));
console.log(echo(25));
console.log(echo({ name: 'Dmitry', age: 25 }));

// Better Generic
function betterEcho<T>(data: T) {
  return data;
}

console.log(betterEcho('Dmitry'));
console.log(betterEcho<number>(25));
console.log(betterEcho({ name: 'Dmitry', age: 25 }));
