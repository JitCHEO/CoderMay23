console.log("hello world")

// Data types

// Boolean
// true and false

// Falsy values
// false
// 0
// ""
// NaN - Not a Number
// null
// undefined

console.log(Boolean(0))
console.log(Boolean(""))
console.log(Boolean(NaN))
console.log(Boolean(null))
console.log(Boolean(undefined))

// Truthy value

console.log(Boolean(-1))
console.log(Boolean("aajskhd"))
console.log(Boolean([]))
console.log(Boolean({}))
console.log(Boolean(123))
console.log(Boolean("asd"))
console.log(Boolean(true))


// String
let greet = "Hi!!!!"
console.log(typeof(greet))
console.log(greet.length)
console.log(greet.charAt(1))

let name = "John"
console.log(greet + name)
console.log(greet + "how are you" + name)
console.log(`${greet} How are you ${name}`)

// Number
// No distinction between integer and float.
console.log(typeof 2)
console.log(typeof 2.1)

console.log(1/2)
console.log(1/0)
console.log(1/"check")

// Null and undefined
let b = null
console.log(b)
let a
console.log(a)


// Array - List in python
const firstArray = ["John", 23]
console.log(firstArray[0])
console.log(firstArray.length)
firstArray.push("Sydney")
console.log(firstArray)
firstArray.pop()
console.log(firstArray)
// unshift, shift, slice, splice, concat


// Objects - Dictionaries in python
const firstObject = {
    name: "John",
    age: 26
}
console.log(firstObject.age)
firstObject.address = "Sydney"
console.log(firstObject)
firstObject.age = 32
console.log(firstObject)


// BigInt, Symbol