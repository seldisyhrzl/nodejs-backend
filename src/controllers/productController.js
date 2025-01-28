import getAllProducts from "../models/productModel.js";

const getAllProduct = (req, res) => {
  const products = getAllProducts();
  res.status(200).json(products);
};

export default getAllProduct;
