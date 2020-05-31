// Simple Generic
function echo(data: any): any {
  return data;
}

console.log(echo('Dmitry'));
console.log(echo(25));
console.log(echo({ name: 'Dmitry', age: 25 }));
