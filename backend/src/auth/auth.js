const userModal = require("../model/user Schame and  Model/userModel");
const jwt = require("jsonwebtoken");

async function authentication(req, res, next) {
  const { email, password } = req.body;

  try {
    if (email === "" || password === "") {
      return res.status(404).json({ err: "All Fields Must Required!" });
    }

    const user = await userModal
      .findOne({
        email: email,
        password: password,
      })
      .select("-password");

    if (user == null) {
      return res.status(404).json({ err: "user not found" });
    }

    if (user) {
      req.token = jwt.sign({ ...user }, process.env.SECRET_KEY);
      res.cookie("token", req.token);

      next();
    }
  } catch (err) {
    return res.status(404).json({ err });
  }
}

module.exports = authentication;
