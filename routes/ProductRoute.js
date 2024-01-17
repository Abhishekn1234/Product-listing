
const express = require('express');
const router = express.Router();
const Product = require('../models/Products');
const Category = require('../models/Category');


router.get('/categories', async (req, res) => {
  try {
    const categories = await Category.find({}, subcategories);
    res.json(categories);
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


router.get('/categories/:name', async (req, res) => {
  const categoryName = req.params.name;

  try {
    const category = await Category.findOne({ name: categoryName });

    if (!category) {
      return res.status(404).json({ error: 'Category not found' });
    }

    res.json(category);
  } catch (error) {
    console.error('Error fetching category:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Fetch all products
router.get('/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Fetch products for a specific category
router.get('/products/:category', async (req, res) => {
  const requestedCategory = req.params.category;

  try {
    const products = await Product.find({ category: requestedCategory });
    res.json(products);
  } catch (error) {
    console.error('Error fetching products for category:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


router.post('/products', async (req, res) => {
  try {
    const { name, category } = req.body;
    const allCategories = await Category.find({}, 'name');
    const categoryExists = allCategories.some((cat) => cat.name === category);

    if (!categoryExists) {
      return res.status(404).json({ error: 'Category not found' });
    }

    const newProduct = new Product({ name, category });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
