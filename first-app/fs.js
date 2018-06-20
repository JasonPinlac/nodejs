const fs = require('fs');

//returns an array of strings of all teh files within the directory specified. './' is the relative directory
fs.readdir('./', function(err, files) {
    if(err)
        console.log('Error:', err);
    
    else
        console.log('Result:', files);
});
