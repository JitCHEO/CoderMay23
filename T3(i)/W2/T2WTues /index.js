const promptSync = require('prompt-sync');

const promptInstance = promptSync({
    sigint: true //allows CTRL+C to exit the app
})

let userEnteredValid = false;

do {
    let userInput = promptInstance("How old are you?");
    let userInputAsNumber = Number(userInput)

    if (userInputAsNumber >= 18 ){
        console.log("You are good to vote");
        userEnteredValid = true;
    }else{
        console.log("Not a valid age for voting");
    }
} while (!userEnteredValid)

// let {names} = require('./messageList')

// function saySomething(somethingToSay){
//     console.log(somethingToSay)
// }

// saySomething(names)
// saySomething("Welcome to Node.js!")
// saySomething("Pretty cool, right?")

// // for (const name of names) {
// //     saySomething(name)
// // }

// names.forEach(item => {
//     saySomething(item);
// });