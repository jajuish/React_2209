import React from "react"
import "./styles.css"

import random from "simple-random-number-generator"

/**
 * List component returns a list of items
 * @returns jsx
 */
const List = () => {
	let params = {
		min: 10,
		max: 100
	};
	const myRandomNumber = random(params);

	const listArray = [`New item ${myRandomNumber}`, "new item 2", "Item 3"]

	// the only thing you return from a component function is jsx
	// this jsx is ALWAYS wrapped into one single tag. you cannot use multiple parralle tags
	return (
		<div className="div-wrapper">
			<ul>
				{ listArray.map((item, index) =>  <li key={index}>{item}</li> ) }

				<li>{listArray[0]}</li>
				<li>{listArray[1]}</li>
				<li>{listArray[2]}</li>
			</ul>
		</div>
	)
}

export default List