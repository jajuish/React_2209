import React, { useState } from "react"
import "./App.css"

import { Product } from "./components"

import data from "./data.json"

function App() {
	// const [exampleVariable, setExampleVariable] = useState<number | string>(0)
	// setExampleVariable("xyz")

	const [itemsBought, setItemsBought] = useState(0)

	const onBuyItem = (clicks: number, someCheck?: boolean): number => {
		let totalItemsBoughtInvalid: number | string = someCheck ? 
			(itemsBought + clicks) : 
			" "

		// the next 2 lines are the only relevant ones in this fn
		// rest are for demo purposes
		const totalItemsBought: number = itemsBought + clicks
		setItemsBought(totalItemsBought)

		if (someCheck) {
			return totalItemsBought
		}
		return 1
	}

	return (
		<div className="App">
			<h2>My React ts App</h2>

			<div style={{ display: "flex", flexDirection: "row" }}>
				{data.map((item) => (
					<Product
						imgSrc={item.imgSrc}
						name={item.name}
						description={item.description}
					/>
				))}

				<Product
					imgSrc={data[0].imgSrc}
					name={data[0].name}
					description={data[0].description}
					buttonText={"buy"}
					functionToRun={onBuyItem}
				/>
			</div>

			<div>Items bought: {itemsBought}</div>
		</div>
	)
}

export default App
