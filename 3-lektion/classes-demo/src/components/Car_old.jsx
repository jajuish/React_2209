import React from "react";

class Car extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			color: "red",
			showSeat: true,
		};
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({
				color: "green",
			});
		}, 2000);
	}

	componentDidUpdate() {
		console.log("CAR COMPONENT HAS BEEN UPDATED");
	}

	changeCarColor() {
		this.setState({
			color: "blue",
		});
	}

	unmountIt() {
		this.setState({
			showSeat: false,
		});
	}

	render() {
		return (
			<div>
				<div style={{ border: "5px solid black" }}>
					This div is a
					<span style={{ color: this.state.color }}> {this.state.color} </span>
					car
					{this.state.showSeat ? <Seat /> : <div />}
				</div>

				<button onClick={this.changeCarColor.bind(this)}>Change to blue</button>

				<button onClick={this.unmountIt.bind(this)}>Hide seat component</button>

				<div style={{ border: "5px solid black" }}>
					Passed down prop: {this.props.list}
				</div>
			</div>
		);
	}
}

class Seat extends React.Component {
	componentWillUnmount() {
		console.log("SEAT component has unmounted");
	}

	render() {
		return <div>I am located inside the car</div>;
	}
}

export default Car;
