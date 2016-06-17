var bl = require('bl');
var http = require('http');

var url = process.argv[2];

http.get(url, function callback(response) {
	response.pipe(bl(function(err, data) {
		if(err) console.err(err);

		var output = data;
		console.log(output.toString().length);
		console.log(output.toString());
	}));
});