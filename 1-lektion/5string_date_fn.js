/**
 * STRING FUNCTIONS
 * 
 */

// `` 
const myVar = "a"
const myString = `this is also a string ${myVar} other stuff`
console.log(myString)

// let myOtherString = "first char is " + a + "and second is " + b

const myStringArray = myString.split(" ") // overused
// console.log(myStringArray)

const myJoinedString = myStringArray.join("~") // overused
// console.log(myJoinedString)

let myNewVar = 4
const intToString = myNewVar.toString() // VERY overused function!! For API's, printing out in the UI etc

/**
 * DATE FUNCTIONS
 */

const date = new Date()
const dateStr = date.toString()
console.log(date)
console.log(dateStr)

const isoDate = date.toISOString()
console.log(isoDate)
