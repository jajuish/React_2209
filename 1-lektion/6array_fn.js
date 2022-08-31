/**
 * ARRAY FUNCTIONS
 * 
 * note: A callback function is a function passed into another function as an argument, 
 * which is then invoked inside the outer function to complete some kind of routine or action.
 */

const array = [1, "two", new Date(), "three"]

const newArray = array.map((item) => item.toString()[0]) // most popularly used

let newerArray = []
for (const item of array) {
	const newItem = item.toString()[0]
	newerArray.push(newItem)
}

console.log(array)
console.log(newArray)
console.log(newerArray)