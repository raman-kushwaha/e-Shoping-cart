const express = require("express");
const router = express.Router();

//route controllers
const {
  handleAddProduct,
  handleGetProducts,
  handleDeleteProduct,
  handleUpdateProduct,
  handleGetSingleProduct,
  handleSearchProductByKey,
} = require("./Controller/productController");

//auth path
const {
  AuthorizationWidthoutPayload,
  AuthorizationWidthPayload,
} = require("./auth/authorization");

//Unauthorization

router.get("/", handleGetProducts);
router.get("/:id", handleGetSingleProduct);

//Authorization

router.get(
  "/search/:id",
  AuthorizationWidthoutPayload,
  handleSearchProductByKey
);
router.post("/add-product", AuthorizationWidthPayload, handleAddProduct);
router.delete("/:id", AuthorizationWidthoutPayload, handleDeleteProduct);
router.patch("/:id", AuthorizationWidthPayload, handleUpdateProduct);
module.exports = router;
