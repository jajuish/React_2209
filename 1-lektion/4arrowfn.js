/**
 * ARROW FUNCTIONS
 * difference with regular functions: slight differences in the semantics, scoping etc
 * BUT for our intents and purposes, we can use them interchangeably.
 * This is just so that you do not get confused about the syntax etc
 */

// regular function in javascript
function loggerOne (param) {
	console.log(param)
}
loggerOne("reg fn")

// arrow function in javascript
const loggerTwo = (param) => {
	console.log(param)
}
loggerTwo("arrow fn")

// shortened arrow fn
// we like to make code short n sweet.
function addRegular (a, b) {
	return a+b
}
const addArrow = (a, b) => a+b
console.log( addRegular(4, 5) )
console.log( addArrow(4, 6) )
