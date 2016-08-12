var express = require("express");

var app = express();
var timestampController = require('./controllers/timestampController');

//static files in 'view' folder
app.use(express.static(__dirname + '/view'));

//fire controller
timestampController(app);

//listen to port 8080
app.listen(8080, function () {
  console.log('Timestamp API listening on port 8080!');
});