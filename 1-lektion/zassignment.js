/**
 1. create an object of entries about personal information
 * it should necessarily contain the following entries along with the others:
 * - a date datatype
 * - an array
 * - another object within it (nested object)
 * - a function
 */

const info = {
	// your entries here
	name: "Erik Andersson",
	dob: new Date("12-08-1998"),
	favFood: ["naan", "dal", 123],
	education: {
		gymnasiet: "Stenhagen",
		university: "KTH"
	},
	// surname: () => this.name.split(" ")[1],
	surname: function a() { return this.name.split(" ")[1] }
}
// console.log(info.surname())

// console.log(info.name)


/**
 * 2. from the array inside the object "info", add it to a new array using spread operator/ellipses.
 * the new array should contain:
 * ["element-one", rest of the contents of the old array, "element-two"]
 */

const newArray = ["element-one", ...info.favFood, "elemt-two"]

// console.log(newArray)


/**
 * 3. create a json file containing an object with at least one entry.
 * Add the object from the file into a new field called "new" inside the object "info"
 */
const json = require("./data.json")
info.new = {
	...json
}

// console.log(info)


/**
 * 4. create an arrow function which creates and returns the list of keys from an input object
 */

const getKeys = (myObj) => Object.keys(myObj)

// console.log(getKeys(info))


/**
 * 5. convert the date entry from the object "info" into an ISO string and parse it
 */
const myDateString = info.dob.toISOString()

// console.log(myDateString)


/**
 * 6. take the array from the object "info" and use the "map" function to return a 
 * new array with each item being converted into a string
 */
const myNewArray = info.favFood.map((item) => item.toString() )

// console.log(myNewArray)

/**
 * 7. try to understand and experiement with the following functions (can ask me for any help always):
 * - map function (array)
 * - reduce function (array)
 * - filter function (array)
 */

const array = [1,2,3,4]

// filtered down to just the elements from the given array that pass the test implemented by the function.
// console.log( array.filter( (item) => item%2 === 0) )

// The reducer walks through the array element-by-element, at each step adding the current array
// value to the result from the previous step (this result is the running sum of all the previous steps)
// — until there are no more elements to add.
console.log( array.reduce((prev, next) => prev+next) )
