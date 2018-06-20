const EventEmitter = require('events');
const emitter = new EventEmitter();

// Register a listener - a callback function that will be called when an event is raised.
// with this technique we can pass data about the event that just happened/was raised.
emitter.on('messageLogged', function(arg) { // you can use e or arg for the argument on the emitter.emit(param, arg);
    console.log('Listener called.', arg);
});

// we can replicate the emitter.on() method above with an arrow function
emitter.on('messageLogged', (arg) => { // you can use e or arg for the argument on the emitter.emit(param, arg);
    console.log('Listener called.', arg);
});

// Raise an event
emitter.emit('messagedLogged', { id: 1, url: 'http://' });

//--------------------------------------
// Logger class extends the EventEmitter class and thus inherits the on() method.
const Logger = require('./logger');
logger = new Logger();

logger.on('logging', (args) => {
    console.log('listener called: ', args);
});

logger.log('Hello, world!');
