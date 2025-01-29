import products from "../data/dummyProduct.js";

// Get all products
const getAllProducts = () => products;

// Get product by Id
const getProductById = (id) => products.find((product) => product.id === id);

export { getAllProducts, getProductById };
