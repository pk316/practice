// ## One to Multi

// Build a function that sorts an array into a multidimensional array grouped by data type

//     - Write a function that takes one parameter
//         - Parameter 1 - An array of anything
//             - The function should output a multidimensional array grouped by data type
//                 - Example:
// - `var myArray = ['hello', 34, true, false, 'goodbye', 56, 12, '25', true];`
//     - `groupArray(myArray);`
//     - Output - `[['hello, 'goodbye', '25'], [34, 56, 12], [true, false, true]]`


var array = ['hello', 34, true, false, 'goodbye', 56, 12, '25', true];
function sortArray(array) {
    var stringArr = [];
    var booleanArr = [];
    var numberArr = [];
    var newArr = [];
    for (var i = 0; i < array.length; i++) {
        var temp = array[i];
        if (typeof (temp) === 'string') {
            stringArr.push(temp);

        } else if (typeof (temp) === 'boolean') {
            booleanArr.push(temp);

        } else {
            numberArr.push(temp);
        }
    }
    newArr.push(stringArr, booleanArr, numberArr);
    console.log(newArr);
}