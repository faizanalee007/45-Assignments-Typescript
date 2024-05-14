/* More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array*/

let string1 = "hello";
let string2 = "world";
let array = [1, 2, 3, 4, 5];

// Tests for equality and inequality with strings
console.log("Is string1 === 'hello'? I predict True.");
console.log(string1 === 'hello');

console.log("Is string1 !== string2? I predict True.");
console.log(string1 !== string2);

// Tests using the lower case function
console.log("Is string1.toLowerCase() === 'hello'? I predict True.");
console.log(string1.toLowerCase() === 'hello');

// Numerical tests
let number1 = 10;
let number2 = 5;

console.log("Is number1 > number2? I predict True.");
console.log(number1 > number2);

console.log("Is number1 <= number2? I predict False.");
console.log(number1 <= number2);

// Tests using "and" and "or" operators
console.log("Is number1 > 5 && number2 < 10? I predict True.");
console.log(number1 > 5 && number2 < 10);

console.log("Is number1 < 5 || number2 > 10? I predict False.");
console.log(number1 < 5 || number2 > 10);

// Test whether an item is in an array
console.log("Is 3 in the array? I predict True.");
console.log(array.indexOf(3) !== -1);

// Test whether an item is not in an array
console.log("Is 6 not in the array? I predict True.");
console.log(array.indexOf(6) === -1);
