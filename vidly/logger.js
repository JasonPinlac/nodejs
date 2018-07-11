// custom middleware function for logging
// the next argument is reference to the next middleware function in the RPP.
function log (req, res, next) {
    console.log('Logging...');
    next(); // passes control to the next middleware function in the RPP
}

module.exports = log;