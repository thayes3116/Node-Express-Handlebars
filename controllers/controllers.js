var express = require('express');

var router = express.Router();

var model = require('../models/model.js')

// redirect to home
router.get('/', function(req, res) {
	res.redirect('index');
});	

// index page renders all misc items to the DOM
router.get('/index', function(req, res) {
  	model.selectSpecies(function(data){ 		  
    var speciesObject = { species: data };
    console.log(speciesObject);
    res.render('index', speciesObject);
  });
 });


router.post("/", function(req, res) {
    model.insertSpecies(function() {
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