
var express = require("express");
var bodyParser = require("body-parser");

var app = express();
require("./controllers/controllers.js")(app);
var PORT = process.env.PORT || 3000;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
