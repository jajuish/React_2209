import React from "react"
import "./styles.css"

export const Flexform = () => {
	return (
		<div className="outer-div">
			<div className="top-bar">
				SIGN UP!
				<input type="text" />
				<div>
					<button>Send</button>
				</div>
			</div>

			<div className="bottom-bar">
				<div className="bottom-item">Free delivery</div>
				<div className="bottom-item">3-day delivery</div>
				<div className="bottom-item">Secure purchase</div>
			</div>
		</div>
	)
}