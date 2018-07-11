// custom middleware function for authentication
function authenticate (req, res, next) {
    console.log('Authenticating...');
    next();
}

module.exports = authenticate;