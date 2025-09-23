const express = require('express')
const itemsRouter = require('./routes/itemRouter')

const app = express()

const kasutajad = [
    { nimi: "Armin", vanus: 23 },
    { nimi: "karo", vanus: 100 },
]

app.use(express.json())

app.use('/greeting', (req, res) => {
    res.send("hello Armin!")
    console.error("see on viga")
    console.warn("see on hoiatus")
    console.info("See on lihtsalt info.")
    console.table(kasutajad)
    console.time("loop");
    for (let i = 0; i < 1000000; i++) { }
    console.timeEnd("loop")
    console.assert(1 === 2, "See väide on vale!")
    console.assert(2 === 2, "Seda ei näidata.")
    console.group("Kasutaja andmed")
    console.log("Nimi: Armin")
    console.log("Vanus: 23")
    console.groupEnd()
    console.count("loendur");
    console.count("loendur");
    console.count("loendur");


})

app.use('/items', itemsRouter)

module.exports = app
