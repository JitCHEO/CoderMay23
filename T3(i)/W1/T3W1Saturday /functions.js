// // console.log("functions lesson")


// // traditional
// ---------------------
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
// -------------------
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

// //  ARROW FUNCTIONS(less memory usage)
// // ----------------------
// const basicArrowFunc = (someValue) => console.log(someValue)

// const basicArrowFunc2 = (someValue) => {
//     console.log(someValue);
//     return someValue;
// }

// EXAMPLES 1
// ------------
// // const greeterWithDefault = (customMessage) => console.log(`Welcome ${customMessage}`);

// // EXAMPLES 2
// --------------
// const greeterWithDefault = (customMessage = "to the lesson") => {
//     console.log(`Welcome ${customMessage}`);
//     return `Welcome ${customMessage}`
// }

// // functions not executed, just copied around.
// //let storedCustomMessage = greeterWithDefault;

// let storedCustomMessage = greeterWithDefault("to the fat arrow world");

// console.log(`The returned value from the ES6 function is ${storedCustomMessage}`);

// // greeterWithDefault();
// // greeterWithDefault("to the fat arrow functionality")
// // ---------------------------------------------------------------------------

// ANONYMOUS FUNCTION
// ------------------------
// (() => {
//     console.log("IIFE is here");
// });

// // EXAMPLE 1
// // ------------
// (() => {
//     let num1 = 5;
//     let num2 = 12;
//     console.log(`${num1} * ${num2}`);
// })();

// // EXAMPLE 2
// // --------------
// ((num1 = 5, num2 = 12) => {
//     console.log(`${num1 * num2}`);
// })(3,5);
// ------------------------------------------------------

// // CALLBACK FUNCTION
// // --------------------
// function addition (num1, num2) {
//     console.log(`the result is ${num1 + num2}`)
//     //return num1 + num2;
// }

// function printStuff(value1, value2, callback){
//     console.log(typeof(callback));
//     callback(value1, value2);
// }

// function multiplcation (num1, num2) {
//     console.log(`the result is ${num1 * num2}`)
// }

// function greeter (word1, word2) {
//     console.log(`${word1} ${word2}`)
// }
    

// printStuff(4, 3, addition);
// printStuff(4, 3, multiplcation);
// printStuff("Hello", "World", greeter);
// -------------------------------------------------------

// forEach
// -----------
// let array = [1, 4, 7, 9, 10, 14, 16];

// // FAT ARROW
// // ----------
// // array.forEach((item, i, a) => console.log(item, i, a[i]));

// // TRADITIONAL
// // --------------
// function printArray(item, i, a){
//     console.log(item, i, a[i])
// }
// // Use printArray function as a callback, 
// // both of them will executed in each iteration of the array loop
// array.forEach(printArray);
// -----------------------------------------------------------------------

// BUTTONS
// ----------
// const button = document.getElementById("button")

// button.addEventListener("click", () => {
//     console.log("Hey, you actually clicked the button!")
// });
// ------------------------------------------------------------------

// BLOCK
// --------
// let is accessible in its block and inner blocks
// {
//     let number = 5;
//     console.log ("first block " + number);
//     {
        
//         console.log ("inner " + number);
//     }
    
    
// }
// //not accessible
// console.log ("outter " + number);

// // var is accessible everywhere
// {
   
//     {
//         var number = 5;
//         console.log ("inner " + number);
//     }
    
//     console.log ("first block " + number);
// }

// console.log ("outter " + number);
// ------------------------------------------------------


// SCOPE
// --------
// EXAMPLE 1
// -----------
// let number = 8;

// function powerOfTwo(){
//     number = 3
//     return number*number;
// }

// console.log(number)
// console.log(powerOfTwo())
// console.log(number)
// ----------------------------
// EXAMPLE 2
// -----------
// let number = 8;

// function powerOfTwo(){
//     // syntactically OK, but not a good practice, name variables with different names
//     let number = 3;
//     return number*number;
// }

// console.log(number)
// console.log(powerOfTwo())
// console.log(number)
// -------------------------------------------------------------------------------------------

// NESTED FUNCTION(CLOSURES)
// ---------------------------

// // INNER FUNCTION
// function gameData (){
//     let highScore = 0;

//     function setHighScore(newNumber) {
//             highScore = newNumber
//     }

//     setHighScore(42);
//     return highScore
// }

// console.log(gameData());
// -----------------------------------------------

// OBJECT METHODS
// ---------------
let student = {
    name: "James",
    age: 25,
    city: "Brisbane",
    code: function () {
        console.log("Coding challenges, practice makes perfect")
    },
    write: () => console.log("Researching and writing the workbook"),
    skills: {
        coding:{
            level: "high"
        },
        speaking:{
            level: "medium"
        }
    }
}

// TRADITIONAL 
// console.log(`Student ${student.name}, based in ${student.city}, his coding level is ${student.skills.coding.level}`)
// student.code();
// student.write();


const {name, city, code, write, skills, skills: {coding}, skills: {coding: {level}}} = student
console.log(`Student ${name}, based in ${city}`)
code();
write();
console.log(skills);
console.log(coding);
console.log(level);
