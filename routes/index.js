var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/pinyeros', function(req, res, next) {
    var collection = db.collection('cities');

    collection.find({},{"_id" : false , "name": true}).toArray( function (err, data) {
        res.send(data);
    });

});

module.exports = router;
