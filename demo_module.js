var http = require('http');
var dt = require('./myFirstModule');

var now = dt.myDateTime();

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.end(now);
}).listen(8080);
