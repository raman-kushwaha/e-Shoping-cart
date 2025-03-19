const express = require("express");
const {
  handleSignupForm,
  handleLoginForm,
  handleAddProduct,
} = require("./Controller/signupController");
const authentication = require("./auth/auth");

const router = express.Router();

router.post("/signup", handleSignupForm);
router.post("/login", authentication, handleLoginForm);

module.exports = router;
