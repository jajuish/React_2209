/**
 * STRING FUNCTIONS
 * 
 */

// ``
const a = "a"
const b = "b"
let myString = `first char is ${a} and second is ${b}`
let myOtherString = "first char is" + a + "and second is " + b
console.log(myString)
console.log(myOtherString)

// a few important/overused string functions
myString = "Welcome to React @ ECU!"
myOtherString = "You will love it here :)"

const myStringArray = myString.split(" ")
console.log(myStringArray)

const myStringArrayJoined = myStringArray.join(" ")
console.log(myStringArrayJoined)

let myVar = 4
const intToString = myVar.toString() // VERY overused function!! For API's, printing out in the UI etc

/**
 * DATE FUNCTIONS
 */

const date = new Date()
const dateStr = date.toString()
console.log(date)
console.log(dateStr)

const isoDate = date.toISOString()
console.log(isoDate)