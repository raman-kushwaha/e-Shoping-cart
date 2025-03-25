function AuthorizationWidthoutPayload(req, res, next) {
  const auth = req.headers["authorization"]
    ? req.headers["authorization"].split(" ")[1]
    : null;

  if (auth === null) {
    return res.status(404).json("unauthorized user");
  } else {
    next();
  }
}

function AuthorizationWidthPayload(req, res, next) {
  const auth = req.body.headers["authorization"]
    ? req.body.headers["authorization"].split(" ")[1]
    : null;

  if (auth === null) {
    return res.status(404).json("unauthorized user");
  } else {
    next();
  }
}

module.exports = { AuthorizationWidthoutPayload, AuthorizationWidthPayload };
