console.log(__filename);
console.log(__dirname);

var url = 'http://mylogger.io/log';

function log(message) {
    // send an http request using the url above
    console.log(message);
}

// export/expose the details we choose from the module
module.exports.log = log;

// if we want to export only a single method of this module
// module.exports = log;