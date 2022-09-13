import React, { useState, useEffect } from "react";
import "./styles.css";

const Table = () => {
	const [data, setData] = useState();
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	/*
	useEffect(() => {
		console.log("component has now been mounted");
		fetch("https://jsonplaceholder.typicode.com/todos")
			.then((response) => response.json())
			.then((apiData) => {
				setData(apiData);
				setLoading(false);
			});
	}, []);
	*/

	useEffect(() => {
		fetch(
			"https://datausa.io/api/data?drilldowns=Nation&measures=Population"
		)
			.then((response) => response.json())
			.then((apiData) => {
				setData(apiData);
				setLoading(false);
			})
			.catch((err) => {
				setLoading(false);
				setError(true);
				console.log(err);
			});
	}, []);

	/*
	return (
		<div>
			<table>
				<tr>
					<th>User Id</th>
					<th>Task</th>
					<th>Completed?</th>
				</tr>
				{// {data !== undefined &&}
				{loading ? (
					<div>Loading data...</div>
				) : (
					data
						.filter((item) => item.userId === 4)
						.map((item) => {
							return (
								<tr>
									<td>{item.userId}</td>
									<td>{item.title}</td>
									<td>{item.completed ? "yes" : "no"}</td>
								</tr>
							);
						})
				)}
			</table>
		</div>
	);
	*/

	return (
		<div>
			<h2>US population through the years</h2>
			<ul>
				{loading ? (
					<div>Loading your data!</div>
				) : 
				(error ? (
						<div>There was an error. Please try again later</div>
					) : (
						data.data.map((item) => {
							return (
								<li>
									{item["ID Year"]}:{item.Population}
								</li>
							);
						})
					) 
				)}
			</ul>
		</div>
	);
};

/*
true & true = true
true & false = false
*/

export default Table;
