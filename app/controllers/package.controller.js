const config = require("../config/auth.config");
const db = require("../models");
const User = db.user;
const Role = db.role;
const Package = db.package;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.createPackage = (req, res) => {
  
  const package = new Package({ 
    package_name: req.body.package_name,
    price: req.body.price,
    suscription_type: req.body.suscription_type,
    description: req.body.description,
    features: req.body.features,
    client_id: req.userId,
  });

  package.save((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }else{
       res.send({ message: "Package c reated successfully!" });
        return;
    }

   
  });
};
 