const express = require('express')
const { people } = require('./Data/data')
const app = express()

app.use(express.static('./methods-public'))

//This middleware helps to get the Json data from the POST request
app.use(express.json())

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

//Post data sent using javascript 
app.post('/api/people', (req, res) => {
    const { name } = req.body

    if(!name) {
        return res.status(400).json({ success: false, msg: "please provide name value" })
    }
    people.push({ id: 6, name: name})
    res.status(201).json({ success: true, person: name })
})


app.listen(5000, () => {
    console.log("Server is listining at port 5000...");
})
