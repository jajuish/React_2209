import React, { useEffect, useState } from "react"

const Form = ({ formTitle }) => {
	const [name, setName] = useState("")

	/*
	// runs when component has been mounted
	// and runs when it has been updated
	// updated = change in either state or props
	useEffect(() => {
		console.log("component has been mounted or changed")
	})

	// runs when component has been mounted
	useEffect(() => {
		console.log("component has been mounted")
	}, [])

	// runs when the component has been mounted
	// and when the var 'name' has been updated
	useEffect(() => {
		console.log("the state variable 'name' haas been changed")
	}, [name])

	// runs when the component has been mounted
	// and when the prop 'formTitle' has been updated
	useEffect(() => {
		console.log("the prop 'formTitle' has changed")
	}, [formTitle])

	// runs when the component has been mounted
	// and when either 'name' or 'formTitle' has been updated
	useEffect(() => {
		console.log("the state var 'name' or the prop 'formTitle' has been changed")
	}, [name, formTitle])
	*/

	const [docTitle, setDocTitle] = useState(``)

	useEffect(() => {
		document.title = docTitle
	}, [docTitle])

	const [showChildComp, setShowChildComp] = useState(true)

	return (
		<div>
			<h2>{formTitle}</h2>
			<input
				type="text"
				placeholder="name"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<button onClick={() => setDocTitle(`Hi, ${name}`)}>Enter</button>

			{showChildComp && <ChildComp />}
			<button onClick={() => setShowChildComp(!showChildComp)}>Unmount child component</button>
		</div>
	)
}

const ChildComp = () => {
	useEffect(() => {
		// works as a componentWillUnmount
		// runs after the component has been unmounted from the DOM
		return () => console.log("child comp has been unmounted");
	})

	return <div>I am a child div</div>
}

export default Form