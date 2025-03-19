const express = require("express");
const router = express.Router();
const {
  handleAddProduct,
  handleGetProduct,
  handleDeleteProduct,
} = require("./Controller/productController");

router.get("/", handleGetProduct);
router.post("/add-product", handleAddProduct);
router.delete("/:id", handleDeleteProduct);

module.exports = router;
