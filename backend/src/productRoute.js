const express = require("express");
const router = express.Router();
const {
  handleAddProduct,
  handleGetProduct,
} = require("./Controller/productController");

router.get("/", handleGetProduct);
router.post("/add-product", handleAddProduct);

module.exports = router;
