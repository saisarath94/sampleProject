var express = require('express');
var router = express.Router();

var User = require('../mongoDB/schemas/user')
/* GET users listing. */
router.get('/', function (req, res, next) {
  // arrow funtions - ES6
  User.find((err, data) => {
    if (err) {
      res.json({
        statusCode: 0,
        statusMessage: "ERROR",
        data: err.message
      })
    } else {
      res.json({
        statusCode: 1,
        statusMessage: "Success",
        data: data
      })
    }
  })
});

router.get('/:id', function (req, res, next) {
  var input = req.params;
  User.find({
    userId: input.id
  }).exec((err, data) => {
    if (err) {
      res.json({
        statusCode: 0,
        statusMessage: "ERROR",
        data: err.message
      })
    } else {
      res.json({
        statusCode: 1,
        statusMessage: "Success",
        data: data
      })
    }
  })
});

router.post('/', function (req, res, next) {
  var input = req.body;

  /* User.create(input,function(err,data){

  })

  User.create(input,(err,data)=>{

  })

  User.create(input).exec(function(err,data){

  })

  User.create(input).exec((err,data)=>{

  }) */

  User.create(input).then((data) => {
    res.json({
      statusCode: 1,
      statusMessage: "Success",
      data: "Created User Successfully"
    })
  }).catch((err) => {
    res.json({
      statusCode: 0,
      statusMessage: "ERROR",
      data: err.message
    })
  })

});

router.delete('/:id', function (req, res, next) {
  var input = req.params
  User.deleteOne({
    userId: input.id
  }, (err, data) => {
    if (err) {
      res.json({
        statusCode: 0,
        statusMessage: "ERROR",
        data: err.message
      })
    } else {
      res.json({
        statusCode: 1,
        statusMessage: "Success",
        data: "Deleted Successfully"
      })
    }
  })
});

router.put('/:id', function (req, res, next) {
  var input = req.params
  var body = req.body

  User.updateOne({
    userId: input.id
  }, body, (err, data) => {
    if (err) {
      res.json({
        statusCode: 0,
        statusMessage: "ERROR",
        data: err.message
      })
    } else {
      res.json({
        statusCode: 1,
        statusMessage: "Success",
        data: "Updated Successfully"
      })
    }
  })
});


module.exports = router;
