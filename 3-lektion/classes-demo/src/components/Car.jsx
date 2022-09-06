import React from "react";

class Car extends React.Component {
	constructor() {
		super();
		this.state = {
			// FIRST
			carColor: "red",
			showSeat: true,
		};
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({
				carColor: "green", // SECOND
			});
		}, 2000);
	}

	componentDidUpdate() {
		console.log("this component was updated");
	}

	onClickButton() {
		this.setState({
			carColor: "blue", // THIRD
		});
	};

	onClickToggle = () => {
		this.setState({
			showSeat: !this.state.showSeat,
		});
	};

	render() {
		return (
			<div>
				<div>
					This div is a
					<span style={{ color: this.state.carColor }}>
						{this.state.carColor}
					</span>
					car
				</div>

				<button onClick={this.onClickButton.bind(this)}>Change car colour to blue</button>

				<button onClick={this.onClickToggle}>
					Toggle mount seat component
				</button>

				{this.state.showSeat ? <Seat /> : <div />}
			</div>
		);
	}
}

const Seat = () => {
	return <div>This is a seat</div>;
};

export default Car;
