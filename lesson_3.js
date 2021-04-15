// Iterate using for loop

var array = [1,2,3]
for(i=0;i<array.length;i++){
    console.log(array[i])
}


// Iterate using forEach
// This book has issues
const forEach = (array, fn) => {
    let i;
    for(i = 0; i < array.length; i++){
        console.log(fn(array[i]))
    }
};