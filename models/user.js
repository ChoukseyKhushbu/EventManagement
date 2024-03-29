const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, required: true },
  user: { type: String, required: true }
});

module.exports = mongoose.model("User", userSchema);
