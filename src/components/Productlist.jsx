import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Productlist.css';
function ProductList() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [categories, setCategories] = useState([]); 
  const navigate = useNavigate();

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

    
    const fetchProducts = async () => {
      try {
        let url = 'http://localhost:5000/products';
        if (selectedCategory) {
          url += `/${selectedCategory}`;
        }

        const response = await fetch(url);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchCategories();
    fetchProducts();
  }, [selectedCategory]);

  return (
    <div className="product-list-container">
      <h2 className="product-list-heading">Product List</h2>
     
      <table  className="product-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>{product.name}</td>
              <td>{product.category}</td>
            </tr>
          ))}
        </tbody>
      </table>

      
      <Link to="/products" className="add-product-link">Add Product</Link>
    </div>
  );
}

export default ProductList;
