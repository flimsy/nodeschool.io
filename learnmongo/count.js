var mongo = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/learnyoumongo';

mongo.connect(url, function(err, db) {
  if(err) throw err;
  var coll = db.collection('parrots');

  coll.count( {
    age : { $gt : +process.argv[2]}
  }, function (err, count) {
    if(err) throw error;
    console.log(count);
    db.close();
  });
});
