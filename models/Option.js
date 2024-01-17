
const mongoose = require('mongoose');

const subcategorySchema = new mongoose.Schema({
  subcategory: {
    type: String,
    required: true,
  },
  product:{
    type:String,
    required:true,
  },
  
});

const Subcategory = mongoose.model('Subcategory', subcategorySchema);

module.exports = Subcategory;
