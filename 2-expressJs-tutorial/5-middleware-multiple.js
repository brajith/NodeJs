const express = require('express')
const logger = require('./Data/logger')
const authorize = require('./Data/authorize')

const app = express()

//Middleware can be
    //1. Our own -> logger, authorize
    //2. Express predifined middlewares -> app.use(express.static('./public'))
    //3. Third party -> morgan


//if its only one middleware
//app.use(logger)

//if middleware should apply for anly paricular base path
//app.use('/api', [logger, authorize])

//if there are multiple middlewares
app.use([logger, authorize])

//Home page request
app.get('/', (req, res) => {
    res.send(`Home page: ${ req.user }`)
})

//About page request
app.get('/about', (req, res) => {
    res.send('About page')
})

app.get('/api/products', (req, res) => {
    res.send('products page')
})

//if you need multiple middlewares in route itself
//app.get('/api/items',[logger, authorize], (req, res) { }
app.get('/api/items', (req, res) => {
    res.send('items page')
})

//404 request
app.all('*', (req, res) => {
    res.send('Resource not available')
})

app.listen(5000, () => {
    console.log("Server is listining at port 5000...");
})
