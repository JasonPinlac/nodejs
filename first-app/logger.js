const EventEmitter = require('events');

// Logger class extends the EventEmitter class and this inherits the methods for event raising and event listening/handling
class Logger extends EventEmitter {
    // log method that raises the logging event
    log(message) {
        // Raise an event
        this.emit('logging', message);
    }
}

// export/expose the details we choose from the module
module.exports = Logger;

