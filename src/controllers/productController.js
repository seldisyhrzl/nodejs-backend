import { getAllProducts, getProductById } from "../models/productModel.js";

const getAllProduct = (req, res) => {
  const products = getAllProducts();
  res.status(200).json(products);
};

const getProduct = (req, res) => {
  const { id } = req.params;
  const product = getProductById(parseInt(id));

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.status(200).json(product);
};

export { getAllProduct, getProduct };
