const mongoose=require("mongoose");
const productSchema = new mongoose.Schema({
  subcategory: {
    type: String,
   
  },
  productName: {
    type: String,
   
  },
  
});
const Listing = mongoose.model('ProductListing', productSchema);

module.exports = Listing;
