/**
 * Created by Javier on 02/07/2017.
 */

var mongo = require('mongodb');
var MongoClient = mongo.MongoClient;
var http = require('http');


var updatePollution = function () {

    var collection = db.collection('cities');


    collection.find({},{"name" : true, "latitude" : true, "longitude": true }).forEach(function (result) {

        http.get({
            host: 'api.breezometer.com',
            path: '/baqi/?lat='+result.latitude+'&lon='+result.longitude+'&key=32162e29e86c4fd5939995ceb48e089f'
        }, function(response) {

            var body = '';
            response.on('data', function(d) {
                body += d;
            });
            response.on('end', function() {

                // Data reception is done, do whatever with it!
                var parsed = JSON.parse(body);

                var findDoc = {

                    name : result.name

                };

                var setDoc = {
                    $set: {
                        pollutants: parsed.breezometer_aqi
                    }
                };

                try {
                    collection.updateOne(findDoc, setDoc, {upsert: true});
                }catch(e){
                    console.error(e);
                }
            });
        });



    });

};

module.exports = updatePollution;