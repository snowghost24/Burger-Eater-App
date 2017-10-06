var eatenBurgers = require('../data/eatenBurgers');
var newBurgers = require('../data/newBurgers')

console.log(newBurgers);
module.exports = function (app){

   app.get("/", function(req, res) {
      res.render("index");
    });

}

// module.exports = function(app){


//     app.post("/", function(req, res) {
//        console.log(req.body);
//       res.render("index");
//     });
    
// }


