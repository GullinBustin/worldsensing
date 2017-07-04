/**
 * Created by Javier on 02/07/2017.
 */

var mongo = require('mongodb');
var MongoClient = mongo.MongoClient;

var mongoConfig = function (callback) {

    var url = 'mongodb://localhost:27017/worldsensing';

    MongoClient.connect(url, function (err, db) {
        console.log("Connected correctly to MongoDB server");
        global.db = db;

        callback();
        setInterval(callback,  1000 * 60 * 30);
    });

};

module.exports = mongoConfig;


