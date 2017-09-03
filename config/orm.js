var connection = require("../config/connection.js");

var orm = {

	selectSpecies: function(cb){
		
		connection.query("SELECT `species`.`Species_ID`, `species`.`Common_Names`, `species`.`Park_Name`, `parks`.`State`, `species`.`Conservation_Status` FROM `species` INNER JOIN `parks` ON `species`.PARK_NAME = `parks`.`Park_Name` WHERE `parks`.`State` = 'CA' AND (`species`.`Conservation_Status` = 'Endangered' OR `Conservation_Status` = 'Species of Concern') LIMIT 10;", function(err, results){

	 	 	if (err) throw err;

	 	 	cb(results);

	 	 });
	},

	addSpecies: function(col, val, cb){

      connection.query("INSERT INTO `species` (col) VALUES (?)", [val], function(err, result) {
          
          if (err) throw err;
      cb(result);
      });
   },

    deleteSpecies: function(val, cb){

      connection.query("DELETE FROM `species` WHERE `Species_ID` = ?", [val],function(err, result) {
          if (err) {
            throw err;
          }
      cb(results);
    });

   }	

}

module.exports = orm;