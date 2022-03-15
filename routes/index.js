var express = require('express');
var router = express.Router();
var user = require('../mongoDB/schemas/user')

/* GET home page. */
router.post('/', function (req, res) {
  var input = req.body
  var userObj = new user()
  userObj.name = input.name
  userObj.palce = input.palce
  userObj.save((err, data) => {
    if (err) {
      res, json({ message: "error in creatoon",err })
    } else {
      res.json({ message: "user created", data: data })
    }
  })
});

module.exports = router;
