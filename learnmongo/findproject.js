var mongo = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/learnyoumongo';
var age = process.argv[2];

mongo.connect(url, function(err, db) {
  var parrots = db.collection('parrots');

  parrots.find( {
    age : { $gt : +age }
  }, {
    name : 1,
    age : 1,
    _id : 0
  }).toArray(function(err, documents) {
    console.log(documents);
    db.close();
  });
});
