const express = require("express");
const { handleSignupForm } = require("./Controller/signupController");

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send("Testing router");
});

router.post("/signup", handleSignupForm);

module.exports = router;
