const http = require('http');

// server inherits from EventEmitter class
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello');
        res.end();
    }

    if (req.url === '/api/course'){
        res.write('ENC1102');
        res.end();
    }
});

server.listen(3000);
console.log('listening on port 3000...');



