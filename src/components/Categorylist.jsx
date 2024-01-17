import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import'./Categorylist.css';
export default function CategoryList() {
  const [categories, setCategories] = useState([]);
const navigate=useNavigate();
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:5000/categories');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []); 
  const navi=()=>{
   navigate('/category')
  }
  return (
    <div className="category-list-container">
      <h2 className="category-list-heading">Category List</h2>
      {categories.length === 0 ? (
        <p>No categories available.</p>
      ) : (
        <table className="category-table">
          <thead>
            <tr>
              <th>Category Name</th>
              <th>Category Image</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr key={category._id}>
                <td>{category.name}</td>
                <td>
                  {category.image && (
                    <img
                      src={category.image}
                      alt={category.name}
                      style={{ width: '50px', height: '50px' }}
                    />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <button onClick={navi} className="back-button"  >
        Back
      </button>
    </div>
  );
}
