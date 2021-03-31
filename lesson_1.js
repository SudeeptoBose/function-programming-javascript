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








