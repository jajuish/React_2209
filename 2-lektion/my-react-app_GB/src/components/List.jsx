import React from "react"
import random from "simple-random-number-generator"

import "./styles.css"

const List = () => {
	let params = {
		min: 10,
		max: 100
	};
	const myrandomNumber = random(params);

	const array = [`Array item ${myrandomNumber}`, "item 2"]
	return (
		<div className="list-div">
			<ul>
				{ array.map((item) => <li>{item}</li> ) }

				<li>{array[0]}</li>
				<li>{array[1]}</li>
			</ul>
		</div>
	)
}

export default List