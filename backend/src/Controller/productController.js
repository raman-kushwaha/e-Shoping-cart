const { default: mongoose } = require("mongoose");
const productModel = require("../model/Product Schema and Model/productModel");
const {
  requiredPaths,
} = require("../model/Product Schema and Model/productSchema");

async function handleGetProduct(req, res) {
  const products = await productModel.find();

  return res.status(200).json(products);
}

async function handleAddProduct(req, res) {
  const body = req.body;

  try {
    if (
      body.title === "" ||
      body.description === "" ||
      body.category === "" ||
      body.price === "" ||
      body.image === ""
    )
      return res.status(404).json({ err: "All fields must required" });

    const product = await productModel.create({
      title: body.title,
      description: body.description,
      category: body.category,
      price: body.price,
      image: body.imgUrl,
      rating: { rate: body.rating.rate, count: body.rating.count },
    });

    return res.status(200).json(product);
  } catch (err) {
    return res.status(404).json(err);
  }
}

async function handleDeleteProduct(req, res) {
  let id = req.params.id.toString();
  id = id.replace(":", "");

  const product = await productModel.findByIdAndDelete(id);

  console.log(product);

  return res.status(200).json(product);
}
module.exports = { handleAddProduct, handleGetProduct, handleDeleteProduct };
