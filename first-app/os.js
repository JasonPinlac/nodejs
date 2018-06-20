
const os = require('os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log(`total memory: ${totalMemory}
free memory:   ${freeMemory}
used memory:   ${totalMemory - freeMemory}`);

