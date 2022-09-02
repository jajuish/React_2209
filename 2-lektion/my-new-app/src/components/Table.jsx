import React from "react"
import "./styles.css"

export const Table = () => {
	return (
		<table className="table">
			<tr className="table-row">
				<th className="table-heading">Head 1</th>
				<th className="table-heading">Head 2</th>
			</tr>
			<tr className="table-row">
				<td>Data 1</td>
				<td>Data 2</td>
			</tr>
		</table>
	)
}