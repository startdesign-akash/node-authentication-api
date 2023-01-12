const mongoose = require("mongoose");

const Package = mongoose.model(
  "Package",
  new mongoose.Schema({
    package_name: String,
    price: String,
    suscription_type: String,
    description: String,
    features: Array,
    client_id:  
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      }
     
  })
);

module.exports = Package;
