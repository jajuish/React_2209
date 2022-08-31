/**
 * ARRAY FUNCTIONS
 * 
 * note: A callback function is a function passed into another function as an argument, 
 * which is then invoked inside the outer function to complete some kind of routine or action.
 */

// map, filter, reduce

const array = [1, "two", new Date(), "three"]

const newArray = array.map((arrayItem, index) => {
	const myString = arrayItem.toString()
	return myString
})
const newConciseArray = array.map( (arrayItem) => arrayItem.toString() )

// console.log(array)
// console.log(newArray)
// console.log(newConciseArray)

let newerArray = []
for (const item of array) {
	const newItem = item.toString()
	newerArray.push(newItem)
}

const newerArray2 = array.map((arrayItem, index) => `${index}+${arrayItem.toString()}`)
console.log(newerArray2)