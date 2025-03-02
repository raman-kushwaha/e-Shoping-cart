const userModal = require("../model/user Schame and  Model/userModel");

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

module.exports = { handleSignupForm };
