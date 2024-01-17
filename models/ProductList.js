

const mongoose=require("mongoose");
const productSchema = new mongoose.Schema({
  subcategory: {
    type: String,
    required: true // Ensure a subcategory is always provided
  },
  product: {
    type: String,
    required: true // Ensure a product name is always provided
  }
});
const Product = mongoose.model('ProductList', productSchema);

module.exports = Product;
