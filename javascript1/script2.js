console.log('hello arrays')

let myArray = [true, false, 'values', 000, 111];
console.log(myArray);

console.log(myArray.length)

console.log(`function inside message can be called like this array length i.e. ${myArray.length}`)

myArray[2] = 'changed value'
console.log(myArray);

myArray.shift();
console.log(myArray);

myArray.unshift();
console.log(myArray);

myArray.pop()
console.log(myArray);

myArray.push('ayaan');

console.log(myArray.push('ayaan'));
console.log(myArray);

myArray.splice(2, 1, 233.456);
console.log(myArray);
