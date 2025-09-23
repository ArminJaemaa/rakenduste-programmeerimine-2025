const express = require('express')
const itemsRouter = require('./routes/itemRouter')

const app = express()

app.use(express.json())

app.use('/greeting', (req, res) => {
    res.send("hello Armin!")
})

app.use('/items', itemsRouter)

module.exports = app
