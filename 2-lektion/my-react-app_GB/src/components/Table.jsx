import React from "react"
import "./styles.css"

const Table = () => {
	return (
		<table className="my-table">
			<tr>
				<th>Heading 1</th>
				<th>Heading 2</th>
			</tr>
			<tr>
				<td>Data 1</td>
				<td>Data 2</td>
			</tr>
		</table>
	)
}

export default Table