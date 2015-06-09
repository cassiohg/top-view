var express = require('express');
var app = express();

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Top View listening at http://%s:%s', host, port);

});

// respond with "Hello World!" on the homepage
app.use('/', function (req, res, next) {
	console.log(' - a request has arrived:', req.originalUrl);
	next();
});

// accept POST request on the homepage
app.get('/', function (req, res, next) {
	// var newPerson = new Person(newPersonID)

	res.json({'message': 'welcome to top view server'})
});

// accept POST request on the homepage
app.get('/person/:id', function (req, res, next) {
	// var newPerson = new Person(newPersonID)

	json.send("{}")
});

// accept PUT request at /user
app.put('/person/:geolocation', function (req, res) {
  res.send('Got a PUT request at /person/geolocation');
});