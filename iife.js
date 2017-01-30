// **** FUNCTION STATEMENT ****
// IS put into memory initially
// very first word MUST be "function"
function greet(name) {
	console.log("Hello " + name);
}
greet();

// another function statement:
function(name) {
	return "Hello " + name;
}


// **** using a FUNCTION EXPRESSION ****
var greetFunc = function(name) {
	console.log("Hello " + name);
};
greetFunc();
// CREATING FUNCTION OBJECT ON THE FLY
// IS NOT put into memory initially
// function literal
// creating an object like you might a string or a number

// functions are a special kind of object because they have:
// a code property
// that you can invoke

// **** using an IIFE (Immediately Invoked Function Expression) ****
var greeting = function(name) {
	console.log("Hello " + name);
}();
// invoking at the point where you create it 
// when it's done evaluating, this gives you an object - a function object 
// the () invokes the function immediately after creating it

// If it returns a value instead of console.log:
var greeting = function(name) {

	return "Hello " + name;

}("John");

console.log(greeting);

// What happens:
// function object is created using the function expression 
// then invoked/called/run/executed
// that value will be returned
// which will then be set equal to greeting
// pass it a parameter ("John") to get an actual value (rather than undefined)

// creating the function
// calling the function 
// passing it a parameter
// but greeting hold the string, not the function, which causes an error if you try to invoke it


// created a function on the fly that accepts a parameter
// invoke that function and pass the parameter immediately after creating it
// and you get the result of the function
// and that's what goes into greeting
// that's what gets passed to the equals operator

// even better: a stand-alone IIFE

// semicolon ; lets the syntax parser understand this is one line of code

// another function statement:
function(name) {
	return "Hello " + name;
}

// How to make the syntax parser understand that I don't intend this to be a function statement:
// *** make sure the first word is NOT function ***
// most accepted & easiest way: 
// wrap your function in (), like this:
(function(name) {
	return "Hello " + name;
});

// () inside JS is an operator 
// and you only use () with expressions like (3*4)+2; for example
// it's the grouping operator 
// you never put a statement inside () like (if ()); it's always an expression - something that returns a value.
// JS engine knows that anything inside () must be an expression 
// it's sitting there, doing nothing, and you're not using it, but it's valid syntax

// CLASSIC EXAMPLE OF AN IIFE:
// a function expression wrapped in () so that the JS engine understands that I don't mean this to be my normal function statment. 
// I mean this to be an expression, something that's created on the fly when this line of code is executed by adding the () at the end.
// And you can pass values to it:

var firstname = "John";

(function(name) {
	var greeting = "Inside IIFE: Hello";
	console.log(greeting + " " + name);
}(firstname)); 
// or })(firstname); 
// in console, you see: 
// Inside IIFE: Hello John

// extremely useful & extremely common
// will see this form and style in almost every major framework and library

// wrapping function in () protects it from any other code that's included in your application

// many frameworks & libraries wrap all of their code in IIFEs to keep it safe from colliding with other code

// Here's how you could intentionally affect the global object if you wanted to:
(function(global, name){
	var greeting = "Hello";
	global.greeting = "Hello";
	console.log(greeting + " " + name);
})(window, "John"); //IIFE
 console.log(greeting);

 // This ensures that, when you affect the global object, it's intentional.






