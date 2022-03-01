const express = require('express')
const path = require('path')
const { people } = require('./Data/data')
const app = express()

app.use(express.static('./methods-public'))

//This middleware helps to get the form data from the POST request
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.send({
        success: true,
        data: people
    })
})

app.post('/login', (req, res) => {
    const { name } = req.body
    res.send(`welcome ${ name }`)
})


app.listen(5000, () => {
    console.log("Server is listining at port 5000...");
})
