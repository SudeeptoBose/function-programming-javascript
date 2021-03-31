// Calculate Tax Function in ES6
// Not a real function because it depends on global variable
var percentValue=5
var calculate = (value)=>{
    return value/100 * (100 + percentValue);
}
console.log(calculate(5))

// Removing dependency on global variable
var newCalculate = (value, newPercentValue)=>{
    return value/100 * (100 + newPercentValue);
}
console.log(newCalculate(5, newPercentValue = 5))

// A simple function

var simple = (a) =>{
    return a;
}

console.log(simple(5)) // called by its name

// A simple method

var obj = {
    simple : (a) => {
        return a;
    }
}
console.log(obj.simple(9)) // called by its name and associated object

// Imperative code - Telling the compiler how to run the code
var array = [1,2,3]
for (let i=0; i < array.length; i++){
    console.log(array[i])
}

// Declarative code - Telling the compiler what it needs to do
var newArray = [4,5,6]
newArray.forEach((element)=> console.log(element))