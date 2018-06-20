var _ = require('underscore'); // if its not a core module, then it checks the node_modules folder ./node_modules/underscore

//underscore is a module that provides a lot of useful javascript functionality.

var res = _.contains([1,2,3], 3);
console.log(res);