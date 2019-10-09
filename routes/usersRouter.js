var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
const User = require("../models/user");

router.get("/", (req, res) => {
  User.find()
    .then(users => {
      res.status(200).json({
        success: true,
        data: {
          users: users
        }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        success: false,
        errors: err.message
      });
    });
});

router.post("/", (req, res) => {
  const newUser = new User({
    _id: new mongoose.Types.ObjectId(),
    user: "username"
  });

  newUser
    .save()
    .then(user => {
      console.log(user);
      res.status(201).json({
        success: true,
        data: {
          user: user
        }
      });
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        success: false,
        errors: err.message
      });
    });
});

module.exports = router;
