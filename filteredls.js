var fs = require('fs');
var path = require('path');

var pathName = process.argv[2];

var fileExtension = process.argv[3];

fs.readdir(pathName, function callback(err, list) {
	for (var i = 0; i < list.length; i++) {
		if(path.extname(list[i]) == '.' + fileExtension) {
			console.log(list[i]);
		}
	}
})