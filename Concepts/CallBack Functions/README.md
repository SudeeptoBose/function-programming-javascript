# Callback Functions in JavaScript

## Gist: Calling a function inside a function

There is one thing that needs to be clear when calling a function in JavaScript, if the parenthesis is written after the function, then the function will be called immediately. Therefore, in callback functions, we need to omit the parenthesis so that an action is responsible for calling the callback function.

From the example:

toggle is equals to ()=>{}
toggle() is not equals to ()=>{}

