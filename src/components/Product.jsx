import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css';
function Product() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [productName, setProductName] = useState('');
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
   const navigate=useNavigate();
  useEffect(() => {
   
    const fetchCategories = async () => {
      try {
        const response = await fetch('http://localhost:5000/categories');
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
   
    const fetchProducts = async () => {
      try {
        
        const response = await fetch(`http://localhost:5000/products/${selectedCategory}`);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    if (selectedCategory) {
      fetchProducts();
    }
  }, [selectedCategory]);

  const handleAddProduct = async () => {
    try {
      const response = await fetch('http://localhost:5000/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: productName,
          category: selectedCategory,
        }),
      });
      navigate('/productlist')
      const data = await response.json();

      
      setProducts([...products, data]);

      
      setProductName('');
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <div className="product-container">
    
      <label htmlFor="categorySelect"className="category-select-label">Select Category:</label>
      <select
        id="categorySelect"
        className="category-select"
        onChange={(e) => {
          setSelectedCategory(e.target.value);
        }}
        value={selectedCategory}
      >
        <option value="">Select a category</option>
        {categories.map((category) => (
          <option key={category._id} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>

      
      <div>
        <h2>Product Details</h2>
        {products.map((product) => (
          <div key={product._id}>
            <p>{product.name}</p>
            <p>{product.category}</p>
           
          </div>
        ))}
      </div>

      
      {selectedCategory && (
        <div className="add-product-form">
          <h2>Add New Product</h2>
          <input
            type="text"
            placeholder="Product Name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
          <button onClick={handleAddProduct}>Add Product</button>
        </div>
      )}
    </div>
  );
}

export default Product;
