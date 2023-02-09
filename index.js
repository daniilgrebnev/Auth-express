const express = require('express')
const mongoose = require('mongoose')
const PORT = process.env.PORT | 8000
const Router = require('./Router')
const app = express()

app.use(express.json())
app.use('/auth', Router)

const start = async () => {
	try {
		await mongoose.connect('<Mongodb link>')

		app.listen(PORT, () => {
			console.log(`Server starting`)
			console.log(`Check http://localhost:${PORT}`)
		})
	} catch (e) {
		console.log(e)
	}
}
start()
