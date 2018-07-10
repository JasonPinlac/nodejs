
const Logger = require('./logger')
const logger = new Logger();

// Register a listener/event handler
logger.on('messageLogged', (arg) => {
    console.log(`logging '${arg.data}' to '${arg.url}'.`);
});

logger.log('this is my message');