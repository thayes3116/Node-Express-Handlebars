var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "ParkSpecies"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

var model = {
	 selectSpecies: function(data){
	 	 connection.query("SELECT * FROM `species`", function(err, results){
	 	 	if (err) throw err;
	 	 	console.log(results)
	 	 	
	 	 });
	 }	
}

module.exports = model;