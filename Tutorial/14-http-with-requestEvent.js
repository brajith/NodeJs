const http = require('http')

const server = http.createServer()

server.on('request', (req, res) => {
    if(req.url === '/') {
        res.end("This is the Home page")
    }
    else if(req.url === '/about') {
        res.end("This is the About page")
    }
    else {
        res.end("error page")
    }
})

server.listen(5000)