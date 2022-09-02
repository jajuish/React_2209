import React from "react"
import "./styles.css"

const Flexform = () => {
	return (
		<div className="outer-div">
			<div className="top-bar">
				SIGN UP!
				<div>
					<input type="text" />
				</div>
				<div>
					<button>Send</button>
				</div>
			</div>

			<div className="bottom-bar">
				<div className="bottom-item">Free delivery</div>
				<div className="bottom-item">Secure payments</div>
				<div className="bottom-item">3 day delivery</div>
			</div>

		</div>
	)
}

export default Flexform