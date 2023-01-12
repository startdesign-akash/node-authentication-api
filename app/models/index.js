const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user.model");
db.role = require("./role.model");
db.package = require("./package.model");

db.ROLES = ["user", "admin", "restaurant"];

module.exports = db;