const express = require("express");
const {
  handleSignupForm,
  handleLoginForm,
} = require("./Controller/signupController");

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send("Testing router");
});

router.post("/signup", handleSignupForm);
router.post("/login", handleLoginForm);

module.exports = router;
