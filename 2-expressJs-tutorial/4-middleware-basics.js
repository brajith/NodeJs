const express = require('express')
const app = express()

//Request => Middleware => Response

//Middleware
const logger = (req, res, next) => {
    const method = req.method
    const url = req.url
    const timestamp = new Date().getFullYear()
    console.log(`----------------`)
    console.log(method, url, timestamp)
    console.log(`----------------`)

    //next method will pass the control to another middleware or 
    //the final callback
    next()
}

//Home page request
app.get('/', logger, (req, res) => {
    res.send('Home page')
})

//About page request
app.get('/about', logger, (req, res) => {
    res.send('About page')
})

//404 request
app.all('*', logger,(req, res) => {
    res.send('Resource not available')
})

app.listen(5000, () => {
    console.log("Server is listining at port 5000...");
})
