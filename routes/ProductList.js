const express = require('express');
const router = express.Router();
const Product = require('../models/ProductList');

router.get('/subcategories', async (req, res) => {
  try {
    const subcategories = await Product.distinct('subcategory');
    res.json(subcategories);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

router.get('/products/:subcategory', async (req, res) => {
  const { subcategory } = req.params;

  try {
    const products = await Product.find({ subcategory });
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

router.post('/add-product', async (req, res) => {
  try {
    const { subcategory, product } = req.body;

    if (!subcategory || !product) {
      return res.status(400).json({ error: 'Please provide subcategory and product.' });
    }

    const newProduct = new Product({
      subcategory: subcategory,
      product: product,
    });

    const savedProduct = await newProduct.save();
    res.json(savedProduct);
  } catch (error) {
    if (error.name === 'ValidationError') {
     
      return res.status(400).json({ error: error.message });
    } else {
      console.error('Error adding new product:', error);
      res.status(500).send('Internal Server Error');
    }
  }
});


module.exports = router;
