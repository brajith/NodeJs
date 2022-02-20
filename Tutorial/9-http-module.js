const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/')
        res.end("This is the Home page")

    if(req.url === '/about')
        res.end("This is the About page")

    res.end("error page")
    
})

server.listen(8000)

