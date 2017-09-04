var orm = require('../config/orm.js');

 var model ={
	 selectSpecies: function(cb){

	 	 orm.selectSpecies(function(data){

      cb(data);

     });
	 },

   addSpecies: function(col, val, cb){

      orm.addSpecies(col, val, function(data){

        cb(data);

     });
      
    },

   deleteSpecies: function(cb){
      
      orm.deleteSpecies(function(data){

        cb(data);

      });
   }	
}

module.exports = model;