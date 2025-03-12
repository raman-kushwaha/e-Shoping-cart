const userModal = require("../model/user Schame and  Model/userModel");
const jwt = require("jsonwebtoken");

async function handleSignupForm(req, res) {
  let user = {};
  const { username, email, password, confirmpassword } = req.body;

  if (!username || !email || !password || !confirmpassword) {
    return res.status(404).json({ error: "All fields must required" });
  }

  try {
    if (password === confirmpassword) {
      user = await userModal.create({
        username: username,
        email: email,
        password: password,
      });
    } else {
      return res.status(404).json({ error: "Password field must be same" });
    }
  } catch (err) {
    // console.log(err);
  }

  return res.json(user);
}

async function handleLoginForm(req, res) {
  let user;
  let token;

  const { email, password } = req.body;

  try {
    user = await userModal
      .findOne({
        email: email,
        password: password,
      })
      .select("-password");

    if (!user) {
      throw new Error("User not Found");
    }

    if (user) token = jwt.sign({ ...user }, process.env.SECRET_KEY);

    res.cookie("token", token);
  } catch (err) {
    return res.status(404).json({ err: "user not found" });
  }

  return res.json({ token: token });
}

module.exports = { handleSignupForm, handleLoginForm };
