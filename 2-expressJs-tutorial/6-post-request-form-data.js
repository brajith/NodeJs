const express = require('express')
const { people } = require('./Data/data')
const app = express()

app.use(express.static('./methods-public'))

//This middleware helps to get the form data from the POST request
app.use(express.urlencoded({ extended: false }))

app.get('/api/people', (req, res) => {
    res.send({
        success: true,
        data: people
    })
})

app.post('/login', (req, res) => {
    const { name } = req.body

    if(name) {
        res.status(200).send(`welcome ${ name }`)
    } 
    else {
        res.status(401).send(`Please enter the credentials`)
    }
})


app.listen(5000, () => {
    console.log("Server is listining at port 5000...");
})
