import express from "express" // es6 import style

const app = express()
const port = 3000

app.get('/', (req, res) => {
	res.send('Hello World!')
}) // go to http://localhost:3000 to test (on your browser)

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})
