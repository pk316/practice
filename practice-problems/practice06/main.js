// Build a function that takes one parameter and prints out the Fibonacci sequence 
// based on the input parameter. 

// - Write a function that takes one parameter
//     - Parameter 1 - A number
//         - The function should output the Fibonacci sequence to the number of 
//         spaces set by parameter 1 starting from zero.
// - Example:
// - `fibSequence(12);`
//     - Output - `0 1 1 2 3 5 8 13 21 34 55 89`
//     - If you are unfamiliar with the Fibonacci sequence < a href = "https://www.google.com" 
//     target = "_blank" > Click Here</a >


function fibonacci(num){
    var sequence = [0,1];
    if (num < 2){
        console.log(sequence);
    }
    for ( var i = 2 ; i < num ; i ++){
        sequence[i] = sequence[i-1]+ sequence[i-2];
        console.log(sequence)
    }
}
fibonacci(12);

//recursion using memoization
var memory = {};
function recursivefib(n) {
    if (memory[n] !== undefined) {
        return memory[n];
    }
    if (n < 2) {
        memory[n] = n;
        return n;
    }
    var value = fibM(n - 1) + fibM(n - 2);
    memory[n] = value;
    return value;
}
console.log(recursivefib(12));


//es6 single line recursion

const recursion = (n) => n<=1? 1 : recursion(n - 1) + recursion(n - 2);

console.log(recursion(12));