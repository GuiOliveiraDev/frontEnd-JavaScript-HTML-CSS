/*
    What does 'result1 evaluate to? Youomight want to review the previous lesson for this one.
*/

const myObj = {
    prop1: 'first value',
    prop2: 20
};

const myArray = [40, 50, 2];

const result = myObj.prop2 === (myArray[0] / myArray[2]);

// The result will evaluate to equal: true!

console.log(result)