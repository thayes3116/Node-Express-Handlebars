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

   deleteSpecies: function(col, val, cb){
      
      orm.deleteSpecies(col, val, function(data){

        cb(data);

      });
   },

   updateSpecies: function(){

      orm.updateSpecies(col, vals, function(data){
        
      })
   }
}

module.exports = model;