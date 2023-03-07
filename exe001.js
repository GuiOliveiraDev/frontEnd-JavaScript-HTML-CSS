const myBoolean = true;

const myString = 'hello world';

const firstNumber = 20;

let secondNumber = 40;

secondNumber = 80

const sumNumbers = firstNumber + secondNumber

const myArray = [myBoolean, myString]

const myObject = { firstProperty: myArray, sumProperty: sumNumbers,}

console.log(myObject)

console.log(myObject.sumProperty)

console.log(myObject.firstProperty[1])