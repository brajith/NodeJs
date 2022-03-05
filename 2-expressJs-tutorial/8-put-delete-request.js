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

//PUT Method
app.put('/api/people/:id', (req, res) => {
    const { id } = req.params
    const { name } = req.body

    //find the person object that matches with the id
    const person = people.find(p => p.id === Number(id))

    //If the person doesnot exits then return 404 message
    if(!person) {
        return res.status(404).send({
                success: false,
                msg: `Person with id ${ id } is not present`
            })
    }
    
    //update the person to new value
    const newPeople = people.map(person => {
        if(person.id === Number(id)) {
            person.name = name
        }
        return person
    })

    //Send updated data
    res.status(200).json({
        success: true,
        data: newPeople
    })
})


app.delete('/api/people/:id', (req, res) => {
    const { id } = req.params

    //find the person object that matches with the id
    const person = people.find(p => p.id === Number(id))

    //If the person doesnot exits then return 404 message
    if(!person) {
        return res.status(404).json({
                success: false,
                msg: `Person with id ${ id } is not present`
            })
    }

    const newPeople = people.filter(p => p.id !== Number(id))

    //Send updated data
    res.status(200).json({
        success: true,
        data: newPeople
    })
})

app.listen(5000, () => {
    console.log("Server is listining at port 5000...");
})
