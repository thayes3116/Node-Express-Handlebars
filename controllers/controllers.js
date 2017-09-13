var model = require('../models/model.js')
var express = require("express");
var router = express.Router();

// index page renders all items to the DOM
router.get('/', function(req, res) {
  	model.selectSpecies(function(data){ 
    // console.log(data);		  
    var speciesObject = { species: data };
    res.render('index', speciesObject);
  });
});

router.post("/post/state", function(req,res){
  console.log("hitting /post/state route")
  console.log(req)
  
})
router.post("/Species_ID:", function(req, res) {
    // model.deleteSpecies
    // ("species.Species_ID",
    //   req.body.Species_ID, 
    //   function(data) {
        console.log(req.body);
    //     res.redirect("/");
    // });  
});
router.post("/", function(req, res) {

    model.addSpecies("species.Common_Names",
      
      function(data) {
        
        res.redirect("/");
    });
});

router.post('/misc/update/:id', function(req, res) {

  model.updateSpecies(req.params.id, function() {
    
    res.redirect('/');
  });
});

 //export module
 module.exports = router;