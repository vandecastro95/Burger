let express = require("express");

let router = express.Router();

// Import the model (burgers.js) to use its database functions.
let Burgers = require("../models/burgers.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  Burgers.all(function(data) {
    let hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.get("/api/burgers", function(req, res) {
    Burgers.all(function(data) {
        res.send(data)
    })
})

router.post("/api/burgers", function(req, res) {
  Burgers.create([
    "burger_name", "devoured"
  ], [
    req.body.name, 0
  ], function(result) {
    // Send back the ID of the new quote
   res.redirect('/');
  });
});

router.put("/api/burgers/:id", function(req, res) {
  let condition = "id = " + req.params.id;

  console.log("condition", condition);

  Burgers.update({
    devoured: true
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});


// Export routes for server.js to use.
module.exports = router;
