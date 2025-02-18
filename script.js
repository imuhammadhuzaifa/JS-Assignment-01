// Chapter 01 alerts

// Qno 01: 

alert("Hello World");

// Qno 02:

alert("Error! Please enter a valid password.");

// Qno 03:

alert("Welcome to JS Land... \nHappy Coding!");

// Qno 04:

alert("Welcome to JS Land...");
alert("Happy Coding!");

// Qno 05:

alert("Hello... I can run JS through my web browser's console");

// Qno 06:

alert("Hello... I can run JS through my web browser's console");

// Chapter 02 variables for strings

// Qno 01:

var username;

// Qno 02:

var myName = "Muhammad Huzaifa";

// Qno 03:

var message = "Hello World";
alert(message);

// Qno 04:

var name = "Jhone Doe";
var age = "15 years old";
var course = "Certified Mobile Application Development";
alert(name);
alert(age);
alert(course);

// Qno 05:

var food = "PIZZA \nPIZZ \nPIZ \nPI \nP";
alert(food);

// Qno 06:

var email = "example@gmail.com";
alert("My email address is " + email);

// Qno 07:

var book = "A smarter way to learn JavaScript";
alert("I am trying to learn from the Book " + book);

// Qno 08:

document.write("Yah! I can write HTML content through JavaScript");

// Qno 09:

alert("“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”");

// Chapter 03 variables for numbers

// Qno 10: 

var age = 15;

alert("I am " + age + " years old");

// Qno 11:

var num = 14;

alert("You have visited this site " + num + " times");

// Qno 12:

var year = 1990;
document.write("My birthday year is " + year );
document.write("<br>");
document.write(" Data type of my declared variable is a number");

// Qno 13:

var name = "John Doe";
var product = "T-shirt";
var quantity = 5;
document.write(name + " ordered " + quantity + " " + product + "(s) on XYZ Clothing store");

// Chapter 04

// Qno 01:

//  Declare 3 variables in one statement:

var a = 10, b = 20, c = 30;

// Legal variable names:

var myVariable;
var _myVariable;
var $myVariable;
var var123;
var myVariable1;

// Illegal variable names:

// var 1stVariable;
// var my-Variable;
// var var!name;    
// var function;   
// var new;        


document.write("<h1>Rules for naming JS variables</h1></br>");

document.write("<p>Variable names can only contain <strong>letters</strong>, <strong>numbers</strong>, <strong>underscores</strong> and <strong>dollar signs</strong>. For example $my_1stVariable</p>");

document.write("<p>Variables must begin with a <strong>letter</strong>, <strong>underscore</strong> or <strong>dollar sign</strong>. For example $name, _name or name</p>");

document.write("<p>Variable names are <strong>case sensitive</strong></p>");

document.write("<p>Variable names should not be JS <strong>keywords</strong></p>");


// Chapter 1 (Alerts)


// 1. Alert these following (individually):

alert("First Name");
alert("Last Name");
alert("Email");
alert("Phone Number");
alert("Password");


// 2. Correct this statement:

alert("You're learning JavaScript!");


// 3. Code an alert statement displaying any message you like:

alert("The " + "'F'" + " in JavaScript stand for Fun");


// Chapter 2 (Variables for string):


// 1. Declare any variable in the camel Case format:

var userAge = 25;

// 2. Declare a variable of your choice without defining it. Then, in a second statement, assign it a string of your choice:

var favoriteColor;
favoriteColor = "Blue";

// 3. Declare the variable teamName and alert your Team name:

var teamName = "The Avengers";
alert(teamName);

// 4. This statement has already been coded. var bestMan = "Charlie"; Assign the variable a new string:

var bestMan = "Charlie";
bestMan = "Alex";


// Chapter 3 (Variables for numbers):


// 1. Declare a variable caseQty:

var caseQty;

// 2. Assign to the variable caseQty, which has already been declared, the value 144.

caseQty = 144;

// 3. Rewrite this statement so the variable can be used in a math operation (convert the string to a number):

var num = "9"; 
num = Number(num);

// 4. In one statement declare a variable. In a second statement, assign it the sum of 2 numbers:

var total;
total = 5 + 7;

// 5. What is the value of orderTotal?

var merchTotal = 100;
var shippingCharge = 10;
var orderTotal = merchTotal + shippingCharge;  // The value of orderTotal is 110

// 6. In the first statement declare a variable and assign it a number. In the second statement, change the value of the variable by adding it together with a number:

var num = 50;
num = num + 25;
