console.log("hello world from external file");
//Single Line Comment

/*
Multi
Line
Comment
*/

//print message for user
//alert("hello world from external file");
//print message in console
console.log("hello world from external file");
//print message in browser
// it is not recommended because it will overwrite the entire page and it is deprecated
document.write("<h1>Hello World from external file</h1>");
//print message in browser
document.getElementById("demo").innerHTML = "hello world from external file";
//print message in browser
// window.alert("hello world from external file");

//for developers
console.log("Show me");

console.error("Show me Error");

console.table(["Osama", "Ahmed", "Ali"]);

//auto semicolon insertion
console.log("Hello"); // with semicolon ==> ;
console.log("Hello"); // without semicolon ==> ;
// JavaScript / Automatic semicolon insertion

// - Variable names must start with a letter, an underscore ( _ ) or a dollar sign ( $ )
// - Variable names cannot contain spaces
// - Variables cannot be the same as reserved keywords such as (if , for , delete, const)
// - JavaScript variable names are written in camelCase
//valid
var username = "ahmed";
var _username = "ahmed";
var $username = "ahmed";
//invalid
// var user name = "ahmed"
// var 7up = "ahmed"
// var user-name = "ahmed"
// var var = "ahmed"
// var if = "ahmed"
//camelCase
var userName = "ahmed";
var userAge = 30;

//declare variable
var x;
//initialize or assignment variable
x = 10;
//declare and initialize variable
var y = 20;
//declare and initialize multiple variables
var a = 10,
  b = 20,
  c = 30;
//declare and initialize multiple variables
var d = 10,
  e = 20,
  f = 30;

//data types
//1-primitive data types (store in stack)
//string
var x = "ahmed" || "ahmed";
var i = "10" || "10";
//number
var x = 10;
var y = 10.5;
//boolean
var x = true;
var y = false;
//undefined ==>Undefined means a variable has been declared but has yet not been assigned a value.     (empty)
var x;
//null =⇒ Null is an assignment value. It can be assigned to a variable as a representation of no value.   (Nothing)
var x = null;
//typeof null ===> object
//null and undefined same value, not the same type
//symbol
var x = Symbol("ahmed");
//bigint
var x = 10n;
//2-reference data types (store in heap)
//object
var x = {
  name: "ahmed",
  age: 30,
};
//array
var x = ["ahmed", "ali", "mohamed"];
//function
var x = function () {
  console.log("hello world");
};

// concatenation
var x = "ahmed";
var y = "ali";
var z = x + " " + y;
console.log(z);

//difference between merge and concatenation
var x = "10";
var y = 10;
var z = x + y;
console.log(z);
//concat between strings and merge between numbers
console.log(10 + 10 + "Ahmed" + 10);
console.log(10 + "Ahmed" + 10 + 10);

// prompt
var x = prompt("Enter your name");
//type is returned string or null
console.log(x);

//convert to number
var x = prompt("Enter your name");
x = Number(x);
console.log(x);
console.log(typeof x);

//some examples
Number("10");
Number("");
Number(" ");
Number("Ahmed");
Number(undefined);
Number(null);
Number(true);
Number(false);
// unary operators
console.log(+100); // 100 - Normal Number
console.log(+"100"); // 100 - String Number
console.log(+"-100"); // -100 - String Negative Number
console.log(+"Osama"); // NaN - String Text
console.log(+"15.5"); // 15.5 - Float
console.log(+0xff); // - Hexadecimal Numeral System => 0xFF
console.log(+null); // 0
console.log(+false); // 0
console.log(+true); // 1

//strings and template literals
let name = "Mohammed";
let age = 22;
//old way
let message = "Hello, my name is " + name + " and I am " + age + " years old.";
console.log(message);
let multi = "This is\n" + "a multiline\n" + "string.";

// template literals (ES6)
message = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(message);
multi = `This is
a multiline
string.`;

//conditionals
/*
if (condition) {
  //  block of code to be executed if the condition is true
}
  */
var x = 2;
if (x > 0) {
  console.log("True");
}

//else statement
var x = 2;
if (x > 0) {
  console.log("True");
} else {
  console.log("False");
}

//else if statement
var x = 2;
if (x > 0) {
  console.log("True");
} else if (x < 0) {
  console.log("False");
} else {
  console.log("Zero");
}

// Comparison Operators (==, ===, >, ≥, <, ≤ , !=)
//Logical Operator (|| (OR), && (AND), ! (NOT)
// arithmetic operators, (Implicit Conversion) ( +, -, *, /, %, ++, - -)
// Increment (++) and Decrement (--) [post / pre ]

// iteration
//   1- start :Init     2- end: Condintion  4- Incerement
// for (expression 1; expression 2; expression 3) {
// 	//3-Body
//   // code block to be executed
// }

// while (condition) {
//   // Code to execute as long as condition is true
// }
var count = Number(window.prompt("enter valid number"));
while (count != 0) {
  count = Number(window.prompt("enter valid number"));
  console.log(count);
}

// The do...while loop is similar to the while loop, but with one key difference:
//  the do...while loop always executes the code block at least once, regardless of the condition.
//  This is because the condition is checked after the code block has been executed.
// do {
//   // Code to execute
// } while (condition);
var count;
do {
  count = Number(window.prompt("enter valid number"));
  console.log(count);
} while (count != 0); // 1 !=0 ? true s

// switch case
/*
switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}
*/

var today = 3;
var day = "";
switch (today) {
  case 0: // todaye === 0
    day = "Sunday";
    break;
  case 1: // todaye === 1
    day = "Monday";
    break;
  case 2: // todaye === 2
    day = "Tuesday";
    break;
  case 3: // todaye === 3
    day = "Wednesday";
    break;
  case 4: // todaye === 4
    day = "Thursday";
    break;
  case 5: // todaye === 5
    day = "Friday";
    break;
  case 6: // todaye === 6
    day = "Saturday";
    break;
  default:
    day = "nothing";
}

console.log(day);
