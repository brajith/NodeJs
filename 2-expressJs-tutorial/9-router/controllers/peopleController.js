//Controller file hold all the logic for particular route

const { people } = require('../../Data/data')

const createPeople = (req, res) => {
    const { name } = req.body

    if(!name) {
        return res.status(400).json({ success: false, msg: "please provide name value" })
    }
    people.push({ id: 6, name: name})
    res.status(201).json({ success: true, person: name })
}

const getPeople = (req, res) => {
    res.send({
        success: true,
        data: people
    })
}

const getPerson = (req, res) => {
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

    //Send updated data
    res.status(200).json({
        success: true,
        data: person
    })
}

const updatePeople = (req, res) => {
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
}

const deletePeople = (req, res) => {
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
}

module.exports = {
    createPeople,
    getPeople,
    getPerson,
    updatePeople,
    deletePeople
}
