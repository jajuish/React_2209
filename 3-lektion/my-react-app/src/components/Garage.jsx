import React, { useState } from "react"
import Car from "./Car"

const Garage = ({ nrOfCars, carColorsArray }) => {
	const [count, setCount] = useState(0)

	return (
		<div>
			<h2>You are inside a garage containing {nrOfCars} cars!</h2>
			{ carColorsArray.map( (item) => <Car initialCarColor={item} /> )}

			<div>{count}</div>
			<button onClick={() => setCount(count+1)}>increment</button>
		</div>
	)
}

export default Garage