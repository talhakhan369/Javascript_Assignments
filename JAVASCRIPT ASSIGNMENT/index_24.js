
// More Conditional Tests: #24

var test = "hello";

// Tests for equality and inequality with strings
console.log(test === "hello");
console.log(test != "hello");

// Tests using the lower case function
var text = "Hello";
console.log(text.toLowerCase() === "hello");

// Tests equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
var number = 15;
console.log(number == 15);
console.log(number > 15);
console.log(number < 15);
console.log(number >= 15);
console.log(number <= 15);

// Tests using "and" and "or" operators
var number = 10;
console.log(number < 12 && number > 5);
console.log(number < 8 || number > 12);

// Test whether an item is in a array
var mobile = ["Infinix", "Samsung", "Apple"];

if (mobile.includes("Samsung")) {
   console.log("True");
}

if (mobile.includes("Nokia")) {
   console.log("True");
}  else {
   console.log("False");
};
