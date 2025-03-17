const mongoose = require("mongoose");

//Schema
const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    category: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
    image: {
      type: String,
      require: true,
    },
    rating: { rate: Number, count: Number },
  },
  {
    timestamps: true,
  }
);

module.exports = productSchema;
