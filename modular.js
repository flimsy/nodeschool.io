var module = require('./module');


var dirName = process.argv[2];
var fileExtension = process.argv[3];

module(dirName, fileExtension, function callback(err, data) {

	if (err) {console.log(err)}
	data.forEach(function(fileName) {
		console.log(fileName);
	})

})