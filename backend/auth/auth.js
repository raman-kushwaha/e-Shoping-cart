const userModal = require("../model/user Schame and  Model/userModel");
const jwt = require("jsonwebtoken");

async function authentication(req, res, next) {
  const body = req.body;

  if (body.email === "" || body.password === "")
    return res.status(404).json({ err: "Invalid email or password" });

  try {
    const user = await userModal
      .findOne({
        email: body.email,
        password: body.password,
      })
      .select("-password");

    if (user === null) return res.status(404).json({ err: "user not found" });

    req.token = jwt.sign({ ...user }, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });

    res.cookie("token", req.token);
    if (req.token) next();
  } catch (err) {
    return res.status(404).json(err);
  }
}

module.exports = authentication;
