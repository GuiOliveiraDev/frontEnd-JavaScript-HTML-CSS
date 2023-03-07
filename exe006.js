/* Why doesn't this code work? Try to make ir work and guess what the result will br (hint: this is a little bit of a review from last lessonn).
 */

// this code doesn't work because we declare a variable using 'const' that is dont allow us to reassign a value to the variable.
/*
const numberVariable = 0;

numberVariable++;
numberVariable++;
numberVariable++;

console.log(numberVariable);
*/

// This is a valid code: and the end result is equal to 3!

let numberVariable = 0

numberVariable++;
numberVariable++;
numberVariable++;

console.log(numberVariable);
