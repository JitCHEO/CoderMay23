// let languages = [
//     "JavaScript",
//     "Python",
//     "HTML",
//     "CSS"
// ];

// // i++ === i = i + 1 === i += 1
// // iterator
// for (let i = 0; i < languages.length ; i++ ) {
//     //console.log ("moving through the list of programming languages" + i)
//     console.log(languages[i])
// }

// // enumerator
// // FOR...IN(iterate through objects)
// for (const language in languages) {
//     console.log(`Language: ${language}`)
// }

// // FOR...OF(iterate through arrays)
// for (const language of languages) {
//     console.log(`Language: ${language}`)
// }
// --------------------------------------------------------------------------------

// let languages = [
//     "JavaScript",
//     "Python",
//     "HTML",
//     "CSS"
// ];

// let lang = {language: "JavaScript", skills: "A+"}

// // enumerator
// for (const key in lang) {
//     console.log(`${key}: ${lang[key]}` )

// }
// ------------------------------------------------------------------

// let languages = [
//     {language: "JavaScript", skills: "A+"},
//     {language: "Python", skills: "A+"},
//     {language: "HMTL", skills: "B+"},
//     {language: "CSS", skills: "C-"}
// ];

// let lang = {language: "JavaScript", skills: "A+"}

// for (const language of languages) {
//     console.log(`${language.language}: ${language.skills}`)
// }
// --------------------------------------------------------------------

// let languages = [
//     {language: "JavaScript", skills: "A+"},
//     {language: "Python", skills: "A+"},
//     {language: "HMTL", skills: "B+"},
//     {language: "CSS", skills: "C-"}
// ];

// let lang = {language: "JavaScript", skills: "A+"}

// for (const language of languages) {
//     for (const key in language) {
//         console.log(`${key}: ${language[key]}`)
//     } 
// }
// -----------------------------------------------------------------
// WHILE
// -------

// let number = 1
// while (number <= 10) {
//     console.log(number)
//     number++
// }

// let number = 10
// while (number >= 0) {
//     console.log(number)
//     number--
// }

// let n 
// let option = "y"
// while (option === "y") {
//     n = prompt ("What is your name?")
//     console.log(`Hi ${n}`)
//     option = prompt ("Do you want to enter more names? (y/n)")
// }

let n 
let option
do {
    n = prompt ("What is your name?")
    console.log(`Hi ${n}`)
    option = prompt ("Do you want to enter more names? (y/n)")
}while (option === "y");