const express = require('express')
const app = express()
const path = require('path')

//It uses express predifined middleware
app.use(express.static('./public'))

app.get('/', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, './navbar-app/index.html'))
})

app.get('/about', (req, res) => {
    res.status(200).send('About Page')
})

app.all('*', (req, res) => {
    res.status(404).send('Resource not found')
})

app.listen(5000, () => {
    console.log("Server is listining at port 5000...");
})