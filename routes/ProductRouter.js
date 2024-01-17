
const express = require('express');
const Product = require('../models/ProductList');
const Subcategory = require('../models/Option');

const router = express.Router();

router.route('/first-dropdown-options').get(async (req, res) => {
  try {
    const subcategories = await Subcategory.find();
    res.json(subcategories);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

router.route('/add-product').post(async (req, res) => {
    try {
      const { subcategory, product } = req.body;
  
    const newProduct = new Product({ subcategory, product});
    const savedProduct = await newProduct.save();
    res.json(savedProduct);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

router.route('/second-dropdown-options/:selectedSubcategory').get(async (req, res) => {
  const { selectedSubcategory } = req.params;

  try {
    const products = await Product.find({ subcategory: selectedSubcategory });
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
