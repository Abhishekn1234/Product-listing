const mongoose=require("mongoose");
const productSchema = new mongoose.Schema({
  subcategory: {
    type: String,
   
  },
  productName: {
    type: String,
   
  },
  
});
const PhoneListing = mongoose.model('Phones', productSchema);

module.exports = PhoneListing;
