// more advanced topics or some other miscallaneous ones

/**
 * js classes and "this" keyword
 */

class myClass {
	a = 2
	constructor() {
		console.log(this.a)
	}
}

/**
 * global vs block scoping
 */
// not required information for this course

/**
 * promises: async and await
 * 
 * sync requests
 * send req -> wait for the resp -> proceed with the rest
 * till you get the resp, your application is paused and you cannot make any more requests
 * 
 * async requests -> really good for web browser technology
 * send a req -> it comes when it needs to -> rest of the application moves on
 */


/**
 * import styles
 */
const json = require("./data.json") // ES5 and before syntax - used in commonJs
import json, { aFunction } from "myExampleLibrary" // ES6 and after syntax - used in modules

/**
 * let & const vs var
 * 
 * basically dont use var
 * mostly use const
 * sometimes use let (when required to change the value)
 */

