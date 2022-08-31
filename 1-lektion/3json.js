/**
 * ACCESSING JSON DATA
 */

const json = require("./data.json")

// simple print
console.log(json)

// parsing as string
const parsed = JSON.stringify(json, null, 2)
console.log(parsed)

// accessing data values
console.log(json["abc"])