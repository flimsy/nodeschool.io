var mongo = require('mongodb').MongoClient;

mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, db){
    db.collection('parrots').find( {
        age : { $gt : +process.argv[2]}
    }).toArray(function(err, documents) {
      console.log(documents);
      db.close();
    });
});
