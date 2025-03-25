const mongoose = require("mongoose");

const connection = (url) => {
  return mongoose.connect(url);
};

module.exports = connection;
