var fs = require('fs');

var file = process.argv[2];

var lines = fs.readFileSync(file).toString().split('\n').length - 1;

console.log(lines)
