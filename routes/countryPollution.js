/**
 * Created by Javier on 02/07/2017.
 */

var http = require('http');
var net = require('net');
var url = require('url');

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

        /*
    http.get({
        host: 'api.population.io',
        path: '/1.0/population/2017/aged/18/'
    }, function(response) {

        var body = '';
        response.on('data', function(d) {
            body += d;
        });
        response.on('end', function() {

            // Data reception is done, do whatever with it!
            var parsed = JSON.parse(body);

            res.send(parsed);
        });
    });
    //res.render('index', { title: 'Express' });
    */
});

module.exports = router;