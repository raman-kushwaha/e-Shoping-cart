const express = require("express");
const {
  handleSignupForm,
  handleLoginForm,
} = require("./Controller/signupController");

const router = express.Router();

router.post("/signup", handleSignupForm);
router.post("/login", handleLoginForm);

module.exports = router;
