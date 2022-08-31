/**
 * DESTRUCTURING IN JS / ES6
 */

// 1. destructuring arrays
const myArr = ["example", "array", 1, 2]
const myArrSupplemented = ["first", myArr]
const myArrDestructured = ["first", ...myArr]

console.log(myArr)
console.log(myArrSupplemented)
console.log(myArrDestructured)

// 2. destructuring objects
const myObj = {
	"one": "two"
}
const myObjSupplemented = {
	"first": 1,
	"second": myObj
}
const myObjDestructured = {
	"first": 1,
	...myObj
}

console.log(myObj)
console.log(myObjSupplemented)
console.log(myObjDestructured)