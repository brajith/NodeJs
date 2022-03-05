const express = require('express')
const app = express()
const people = require('./routes/people')
const auth = require('./routes/auth')

//Pre-defined middlewares
app.use(express.static('../methods-public'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//Custom middlewares
app.use('/api/people', people)
app.use('/login', auth)

//listen to port 
app.listen(5000, () => {
    console.log("Server is listining at port 5000...");
})
