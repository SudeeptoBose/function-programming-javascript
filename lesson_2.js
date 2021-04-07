// Use strict is used to find out any errors before run time
// This entire function can be converted into and arrow function

"use strict";
var simpleFn = function simpleFn() {
return "Simple Function";
};
simpleFn();

// Example of how the return & function keyword is not required
var newSimpleFn = () => "Simple Function"

// Wrap function with { } if there are multiple statements
var anotherSimpleFn = () => { //function scope
    if(true) {
        let a = 1;
        var b = 2;
        console.log(a)
        console.log(b)
        } //if block scope
    console.log(b) //function scope
    console.log(a) //function scope
}
anotherSimpleFn();
// The let keyword only creates local variables