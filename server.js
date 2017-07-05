//require npm packages express, body-parser, and methodOverride
var express = require('express');
var bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 3000;

app.use("/public", express.static("./app/public"))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({
  type: "application/vnd.api+json"}));
 
var exphbs = require('express-handlebars'); 

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


var router = require('./controllers/controllers.js');



app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});