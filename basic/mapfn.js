// Create a map functrion that takes an array 
// and a tranform fn as an input 
// and returns the transformed array as an output.

const input = [1, 2, 3, 4, 5];

let ans = input.map(function transform(i){ 
    return i * 2;
});

console.log(ans);

// Whenever asked to transform an array, use map();