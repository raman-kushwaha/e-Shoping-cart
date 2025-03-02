const mongoose = require("mongoose");
const userSchema = require("./userSchema");

const userModal = mongoose.model("userSignup", userSchema);

module.exports = userModal;
