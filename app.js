const http = require('http');
const fs = require('fs');
const { stringify } = require('flatted');
const util = require('util');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'application/json');

    response.end(JSON.stringify({
        message: 'Hello Dev!',
        data: {
            
        }
    }));
});

server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}`);
})

server.on('request', (request) => {
    fs.writeFile('./node.log', util.inspect(request), {
        flag: 'a+'
    }, error => {
        // console.log(error);
    });
})