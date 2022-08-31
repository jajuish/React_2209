/**
 * SPREAD OPERATOR IN JS / ES6
 * ellipses spread operator
 */

// 1. spreading in arrays
const myArray = ["string1", "strin2", 1, 2]
const myNewArray = ["new-element", ...myArray]

// console.log(myNewArray)

const anotherArray = ["new-element", myArray] // order matters

// console.log(anotherArray)

// 2. spreading in objects
const myObj = {
	key1: "conten1"
}

const newObj = { // order does not matter in objects
	key2: "content2",
	...myObj
}

console.log(newObj)

const secondObj = {
	key2: myObj,
}

console.log(secondObj)