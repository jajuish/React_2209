import React, { useState } from "react";

const Car = () => {
	const [carColor, setCarColor] = useState("red");
	const [showSeat, setShowSeat] = useState(true);

	const onClickChangeColor = () => {
		const newColor = carColor === "red" ? "blue" : "red";

		// let newColor
		// if (carColor === "red")
		// 	newColor = "blue"
		// else
		// 	newColor = "red"
		setCarColor(newColor);
	};

	return (
		<div style={{ border: `5px solid black` }}>
			This div is a<span style={{ color: carColor }}> {carColor} </span>
			car

			<button onClick={onClickChangeColor}>Change colour</button>
			
			<button onClick={ () => setShowSeat(!showSeat) } >Toggle seat</button>
			
			{showSeat ? <Seat seatColor="green" showColor={true} /> : <div />}
		</div>
	);
};

const Seat = (props) => {
	return (
		<div>
			This is a {props.showColor ? props.seatColor : ""}
			seat
		</div>
	);
};

export default Car;
