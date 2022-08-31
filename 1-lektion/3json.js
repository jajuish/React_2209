/**
 * ACCESSING JSON DATA
 * json = javascript object notation
 * 
 */
const json = require("./data.json") // ES5 and before format
// import json from "./data.json" // ES6 format -> only used inside declared modules

// simple print
// console.log(json)
// console.log(json.nestedKey)

// stringify
const myNewVar = JSON.stringify(json, null, 3)
// console.log(myNewVar)

// parsing a string
const myJsonString = '{ "key": 2 }'
const myNewObj = JSON.parse(myJsonString)
console.log(myNewObj.key)

// accessing data values
console.log(json["abc"])