const express = require("express");
const router = express.Router();
const {
  handleAddProduct,
  handleGetProducts,
  handleDeleteProduct,
  handleUpdateProduct,
  handleGetSingleProduct,
  handleSearchProductByKey,
} = require("./Controller/productController");

router.get("/", handleGetProducts);
router.get("/:id", handleGetSingleProduct);
router.get("/search/:id", handleSearchProductByKey);
router.post("/add-product", handleAddProduct);
router.delete("/:id", handleDeleteProduct);
router.patch("/:id", handleUpdateProduct);
module.exports = router;
