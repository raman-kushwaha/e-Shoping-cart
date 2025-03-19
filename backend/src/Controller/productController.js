const productModel = require("../model/Product Schema and Model/productModel");

async function handleAddProduct(req, res) {
  const body = req.body;
  console.log(body);

  try {
    if (
      !body.title ||
      !body.description ||
      !body.category ||
      !body.price ||
      !body.image
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
    console.log(err);
  }
}

async function handleGetProduct(req, res) {
  const products = await productModel.find();

  console.log(products);

  return res.status(200).json(products);
}

module.exports = { handleAddProduct, handleGetProduct };
