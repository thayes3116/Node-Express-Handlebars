var orm = require('../config/orm.js');

 var model ={
	 selectSpecies: function(cb){
	 	 orm.selectSpecies(function(data){
      cb(data);
     });
	 },
   addSpecies: function(col, val,  cb){
      connection.query("INSERT INTO `species` (col) VALUES (?)", [val], function(err, result) {
          if (err) throw err;

      cb(result);
      });
   },

   deleteSpecies: function(cb){
      connection.query("DELETE FROM `species` WHERE `Species_ID` = ?", [req.body.delete],function(err, result) {
          if (err) {
            throw err;
          }
      cb(results);
    });
   }	
}

module.exports = model;