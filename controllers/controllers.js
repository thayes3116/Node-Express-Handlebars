var model = require('../models/model.js')
module.exports = function(app) {


// redirect to home
// app.get('/', function(req, res) {
// 	res.redirect('index');
// });	

// index page renders all items to the DOM
app.get('/', function(req, res) {
  	model.selectSpecies(function(data){ 
    // console.log(data);		  
    var speciesObject = { species: data };
    res.render('index', speciesObject);
  });
});

app.post("/delete", function(req, res) {
    // model.deleteSpecies
    // ("species.Species_ID",
    //   req.body.Species_ID, 
    //   function(data) {
        console.log(req.body);
    //     res.redirect("/");
    // });  
});
app.post("/", function(req, res) {
    model.addSpecies("species.Common_Names",
      req.body.Common_Names, 
      function(data) {
        
        res.redirect("/");
    });
});

app.post('/misc/update/:id', function(req, res) {
  model.updateSpecies(req.params.id, function() {
    res.redirect('/');
  });
});

 //export module
 }