// 1. Log "Hello, JavaScript!" to the console in 3 different ways.
console.log("Hello JavaScript");
console.warn("Hello JavaScript");
console.info("Hello JavaScript");
console.error("Hello JavaScript");

// 2. Perform 35 * 2 - (10 / 2) + 7 and log the result.
let result = 35 * 2 - (10 / 2) + 7;
console.log(result);
// 3. Log the data type of "123", 123, true, and null using typeof.
console.log(typeof "123");
console.log(typeof 123);
console.log(typeof true);
console.log(typeof null);

// 4. Write a program that swaps the values of two variables.
let a = 10;
let b = 12
let c;
c = a
a = b
b = c
console.log(a,b);

// 5. Use console.group() to organize logs into a group.
console.groupCollapsed("Todo List")
console.log("Wake up at 4:45 AM");
console.log("Make Wadu");
console.log("Offer Fajr Salah");
console.log("Recite Quran");
console.groupEnd
// 6. Declare a const object, modify its properties, and log the updated object.
 const person = {
    name:"john",
    age : 30,
    occupaition:"Software Er"
 }
 person.name  = "Zuhaib"
 console.log(person.name);
 
// 7. Convert "50" (string) into a number using 3 different methods.
let str = +"50"
console.log(Number(str));
console.log(parseInt(str));
console.log(str);


// 8. Check if "JavaScript" contains "Script" without using .includes().
let str1 = "javaScript"
str1.indexOf('Script')

// 9. Create an array of 5 numbers and log the sum using .reduce().
// 10. Explain the difference between undefined, null, and NaN with examples.
