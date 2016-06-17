var fs = require('fs');

var lines = fs.readFile(process.argv[2], 'utf8', function callback(err, data) {
	if(err) {
		console.log(err)
	} else {
		console.log(data.split('\n').length - 1)
	} 

})