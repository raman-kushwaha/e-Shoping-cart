const express = require("express");
const router = express.Router();
const { handleAddProduct } = require("./Controller/productController");

router.post("/add-product", handleAddProduct);

module.exports = router;
