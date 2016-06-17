var mongo = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/learnyoumongo';

var size = process.argv[2];
mongo.connect(url, function(err, db) {
  if(err) throw err;

  var coll = db.collection('prices');

  coll.aggregate([
    { $match : {
      size : size
    }},
    { $group : {
      _id : 'avg' ,
      avg : {
        $avg : '$price'
      }
    }}
  ]).toArray(function(err, results) {
    if(err) throw err;

    //handle print out here
    console.log(Number(results[0].avg).toFixed(2));
    db.close();
  });

});
