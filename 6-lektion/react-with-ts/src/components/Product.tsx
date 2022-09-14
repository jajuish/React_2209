import React from "react"
import "./styles.css"

interface IProduct {
	imgSrc: string
	name: string
	description: string[]
	buttonText?: string | number
	functionToRun?: (param: number) => void
}

const Product = (props: IProduct) => {
	const onButtonClick = () => {
		if (props.functionToRun !== undefined) {
			props.functionToRun(1)
		}
	}

	return (
		<div className="wrapper">
			<img src={props.imgSrc} className="product-image" />
			<h3>{props.name}</h3>
			<p>{props.description[0]}</p>
			<p>{props.description[1]}</p>

			{props.buttonText !== undefined && (
				<button onClick={onButtonClick}>{props.buttonText}</button>
			)}
		</div>
	)
}

export default Product
