/**
 * Created by Javier on 02/07/2017.
 */

var mongo = require('mongodb');
var MongoClient = mongo.MongoClient;

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

    var collection = db.collection('cities');


    collection.find({},{"_id": false, "name" : true, "population" : true, "pollutants": true }).sort( { population: -1 } ).toArray(function (err, data) {
        res.send({error: err, data:data});
    });


});

module.exports = router;