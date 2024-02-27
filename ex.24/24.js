// Tests for equality and inequality with strings
var hello = 'hello';
var world = 'world';
console.log("Is hello equal to hello? I predict True.");
console.log(hello == hello); // True
console.log("Is hello not equal to hello? I predict True.");
console.log(hello == hello); // false
// Tests using the lower case function
var LowerCaseString = 'HELLO';
console.log("Is LowerCaseString equal to 'hello' when converted to lowercase? I predict True.");
console.log(LowerCaseString.toLowerCase() == 'hello'); // True
console.log(LowerCaseString.toLowerCase() == 'HELLO'); // false
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
var num1 = 10;
var num2 = 5;
console.log("Is num1 equal to 10? I predict True.");
console.log(num1 == 10); // True
console.log("Is num1 not equal to num2? I predict True.");
console.log(num1 != num2); // True
console.log("Is num1 greater than num2? I predict True.");
console.log(num1 < num2); // True
console.log("Is num1 less than or equal to 10? I predict True.");
console.log(num1 > 10); // True
// Tests using "and" and "or" operators
var x = 5;
var y = 10;
console.log("Is x greater than 3 and y less than 15? I predict True.");
console.log(x > 3 && y < 15); // True
console.log("Is x greater than 7 or y less than 5? I predict True.");
console.log(x > 7 || y < 5); // fasle
// Test whether an item is in an array
var fruits = ['apple', 'banana', 'orange'];
console.log("Is 'banana' in the fruits array? I predict True.");
console.log(fruits.indexOf('banana') !== -1); // True
console.log(fruits.indexOf('banana') === -1); // True
// Test whether an item is not in an array
var cars = ['Toyota', 'Honda', 'Ford'];
console.log("Is 'Tesla' not in the cars array? I predict True.");
console.log(cars.indexOf('Tesla') === -1); // True
console.log(cars.indexOf('Tesla') !== -1); // True
