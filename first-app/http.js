const http = require('http');
// create a web server. This server is an event emitter so it has all the capabilities of an EventEmitter

// we add a callback fruntion to this createServer method
// if a client connects to the host server url:portnumber, they will get the response
const server = http.createServer((req, res) => {
    if(req.url === '/dashboard'){
        res.write('Hello world!');
        res.end(); // end the response
    }

    // if we want to build a backend service for a web or mobile applicatoin, we need to handle various routes
    // for example, if a client requests /api/courses - we want to return a list of courses from a database.
    if(req.url === '/api/courses') {
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
});

// because the server is also an event emitter we can set up listeners for events
// this is not ideal however for real world applications. thats why we comment out this block of code here.
// server.on('connection', (socket) => {
//     console.log(`New connection on ${socket}`);
// });

// set a port # that we want our web server to listen on
server.listen(3000);
console.log('Listening on port 3000...');