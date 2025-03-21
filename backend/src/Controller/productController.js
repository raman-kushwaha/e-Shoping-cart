const productModel = require("../model/Product Schema and Model/productModel");
const {
  requiredPaths,
} = require("../model/Product Schema and Model/productSchema");

async function handleGetProducts(req, res) {
  const products = await productModel.find();

  return res.status(200).json(products);
}

async function handleGetSingleProduct(req, res) {
  const id = req.params.id;

  return res.status(200).json({ id });
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

async function handleUpdateProduct(req, res) {
  const id = req.params.id;

  const updatedProduct = req.body;

  try {
    if (
      updatedProduct.title === "" ||
      updatedProduct.description === "" ||
      updatedProduct.category === "" ||
      updatedProduct.price === "" ||
      updatedProduct.image === ""
    ) {
      return res.status(404).json({ err: "All fields must required" });
    }

    const product = await productModel.findByIdAndUpdate(
      id,
      updatedProduct
      // if something went after commenting out the below command then uncomments it and then run
      // {
      //   new: true,
      //   runValidators: true,
      // }
    );

    return res.status(200).json(req.product);
  } catch (err) {
    return res.status(404).json({ err: "user not found" });
  }
}

async function handleSearchProductByKey(req, res) {
  const key = req.params.id.toString().replace(":", "");

  const product = await productModel.find({
    $or: [
      { title: { $regex: key } },
      { description: { $regex: key } },
      { category: { $regex: key } },
    ],
  });

  return res.status(200).json(product);
}

module.exports = {
  handleAddProduct,
  handleGetProducts,
  handleDeleteProduct,
  handleUpdateProduct,
  handleGetSingleProduct,
  handleSearchProductByKey,
};
