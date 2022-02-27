const http = require('http');

const server = http.createServer((req, res) => {
    //Request object important properties
    console.log(`Request METHOD: ${ req.method }`);
    console.log(`Request URL: ${ req.url }`);
    console.log(`-----------------------------`);

    //Status message and headers are optional
    res.writeHead(200, "OKAY", { 'content-type': 'text/html' })
    res.write(`<h2> Home page </h2>`)
    res.end()
})

//Server instance will listen at port 5000
server.listen(5000)