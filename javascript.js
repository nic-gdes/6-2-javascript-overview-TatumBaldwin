// 1.1 Assignment: Where do you put JavaScript?

alert('Javascript is easy')

// 1.2 Assignment: Variables

var mansName = "john";
console.log(mansName);

/* In this example we wanted to create multiple variables with everything we know about John:

var man_firstName = "John";
var man_lastName = "Doe";
var man_age = 25;
var man_location = "United Kingdom";

console.log(man_firstName, man_lastName, man_age, man_location);

*/


// 1.3 Assignment: Variable Declaration & Initialization

var z = "Donkey";
var y = 1;
var x = false;
var w = undefined; // This works, but you could also just declare the variable and immediately end the statement: "var w;"
var v = null;

console.log(z, y, x, w, v);

// 1.4 Assignment: Complete your statements

x = 2;
y = 3;

z = x + y;

// 1.5 Assignment: Brackets, Braces and Parentheses

var a = function(){
 alert('Statement 1');
 alert('Statement 2');
}

console.log(a());



// 1.6 Assignment: Data Types


var a = "name";  //string
var b = 22;      //number
var c = true ;   //boolean
var d = null;   //null
var e = undefined;



console.log(typeof(a))
console.log(typeof(b))
console.log(typeof(c))
console.log(typeof(d))

// 1.7 Assignment: Practicing JavaScript basics

var a = 4;
var b = 3;
var c = 5;

console.log(a * b / c)

/* Cloase! We were looking for a new variable that did the calculation:

var a = 4;
var b = 3;
var c = 5;

var area = a * b / c;

console.log(area);

*/
