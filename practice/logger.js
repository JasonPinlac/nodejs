const EventEmitter = require('events');

var url = 'http://mylogger.io/log';

class Logger extends EventEmitter{
    log(message) {
    // Raise an event
    this.emit('messageLogged', {data: message, url: url}); 
    }
}

module.exports = Logger;