const path = require('path');
const os = require('os');

var pathObject = path.parse(__filename);
console.log(pathObject);

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log(`total memory: ${totalMemory}
free memory:   ${freeMemory}
used memory:   ${totalMemory - freeMemory}`);