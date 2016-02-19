var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var moment = require('moment');

var app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './client')));

app.set('views', path.join(__dirname, './client'));

require('./server/config/mongoose.js');

var routes_setter = require('./server/config/routes.js');
routes_setter(app);

app.listen(8000, function(){
  console.log('Listening on Port 8000');
});
