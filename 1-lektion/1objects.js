/**
 * JS OBJECT:
 * An unordered collection of key-value pairs
 * The key of a property can be a string or number
 * The value of a property can be any value, e.g., a string, a number, an array, and even a function
 * Each key is unique
 * You can nest objects within objects
 */

// 1. basic objects
const obj = {
	// "key1": "content",
	"key2": 4321,
	"nestedKey": {
		"nested1": "somthing",
		52: "fifty-two"
	},
	key1: "string"
}

console.log(obj.key1)
console.log(obj.nestedKey.nested1)
console.log(obj.nestedKey[52])