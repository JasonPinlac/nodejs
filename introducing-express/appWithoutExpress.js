const http  = require('http');

// takes a callback function that has two parameters...req and res
const server = http.createServer(function(req, res) {
   
    // here in the body of this callback function we define various routes
    if(req.url === '/') {
        res.write('Hello World!');
        res.end();
    }

    if(req.url === '/api/courses') {
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }

});

server.listen(3000);
console.log('Listening on port 3000...')