const express = require('express')
const mongoose = require('mongoose')
const app = express()
const bodyParser = require("body-parser")
const PORT = 3000
const db_url = 'mongodb://localhost:27017/stock_block'

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

mongoose.connect(db_url).then(() => {
    console.log('MongoDB connected')
},
    err => handleError(err))

require('./route/routes')(app)

app.listen(PORT, () => {
    console.log("Application started on the port", PORT)
})
