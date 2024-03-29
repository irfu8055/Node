const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  first_name: { type: String },
  last_name: { type: String },
  email: { type: String, unique: true },
  password: { type: String },
  utype: { type: String },
  token: { type: String }
});

module.exports = mongoose.model("user", userSchema);