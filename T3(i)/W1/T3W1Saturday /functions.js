// // console.log("functions lesson")


// // traditional

// function greeter () {
//     console.log("Welcome to the lesson");
// }

// greeter();
// ------------------------------------------

// //  METHOD 1
// ----------------
// /**
//  * 
//  * @param {string} customMessage 
//  */
// function greeterWithMessage(customMessage){
//     console.log(`Welcome ${customMessage}`);
// }

// greeterWithMessage("to the functions lesson");

// //  METHOD 2
// -----------------
// /**
//  * 
//  * @param {string} customMessage 
//  */
// function greeterWithMessage(customMessage){
//     console.log(`Welcome ${customMessage}`);
// }

// /**
//  * 
//  * @param {string} customMessage. Optional custome message 
//  */
// function greeterWithDefault(customMessage = "to the lesson") {
//     console.log(`Welcome ${customMessage}`);
// }

// // greeterWithMessage("to the functions lesson");
// greeterWithDefault();
// greeterWithDefault(", functions lesson is here!");
// -------------------------------------------------------------------------------------

// ADDITIONS
//  TYPE1
// ----------
// /**
//  * 
//  * @param {number} num1 
//  * @param {number} num2 
//  * @returns the addition of num1 + num2
//  */
// function addition (num1, num2) {
//     return num1 + num2;
// }

// result = addition(5, 8);

// console.log(addition(4, 17));

// //  TYPE2
// // ------------
// /**
//  * 
//  * @param {number} num1 
//  * @param {number} num2 
//  * @returns the addition of num1 + num2
//  */
// const result = function addition (num1, num2) {
//     // console.log(`the result is ${num1 + num2}`)  THIS OR 
//     return num1 + num2;
// }

// // OR THIS
// console.log(addition(4, 17)); 

// RETURN IN THE TERMINAL
// typeofresult(result)
// -> 'function'
// result()
// -> NaN
//  result(7, 9)
// -> 16
// --------------------------------------------

//  ARROW FUNCTIONS(less memory usage)

const basicArrowFunc = (someValue) => console.log(someValue)

const basicArrowFunc2 = (someValue) => {
    console.log(someValue);
    return someValue;
}

// EXAMPLES 1
// const greeterWithDefault = (customMessage) => console.log(`Welcome ${customMessage}`);

// EAMPLES 2
const greeterWithDefault = (customMessage = "to the lesson") => {
    console.log(`Welcome ${customMessage}`);
    return `Welcome ${customMessage}`
}

// functions not executed, just copied around.
//let storedCustomMessage = greeterWithDefault;

let storedCustomMessage = greeterWithDefault("to the fat arrow world");

console.log(`The returned value from the ES6 function is ${storedCustomMessage}`);

// greeterWithDefault();
// greeterWithDefault("to the fat arrow functionality")

