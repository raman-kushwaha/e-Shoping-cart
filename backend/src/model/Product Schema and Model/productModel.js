const mongoose = require("mongoose");
const productSchema = require("./productSchema");

//Model
const productModel = mongoose.model("product", productSchema);
module.exports = productModel;
