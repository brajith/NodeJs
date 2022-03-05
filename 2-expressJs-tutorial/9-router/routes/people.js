const express = require('express')
const router = express.Router()
const {
    createPeople,
    getPeople,
    getPerson,
    updatePeople,
    deletePeople
} = require('../controllers/peopleController')

router.route('/').get(getPeople).post(createPeople)

router.route('/:id').put(updatePeople).delete(deletePeople)

module.exports = router