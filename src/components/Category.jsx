import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Category.css';
const Category = () => {
  const [categoryName, setCategoryName] = useState('');
  const [categoryImage, setCategoryImage] = useState(null);
  const [creationMessage, setCreationMessage] = useState('');
   const navigate=useNavigate();
  const handleCreateCategory = async () => {
    try {
      const formData = new FormData();
      formData.append('name', categoryName);
      formData.append('image', categoryImage);

      const response = await axios.post('http://localhost:5000/categories', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
       
      console.log('Category created:', response.data);
      navigate('/categorylist');
      setCreationMessage('Category created successfully');

      
      setCategoryName('');
      setCategoryImage(null);

      
    } catch (error) {
      console.error('Error creating category:', error);
    }
  };

  return (
    <div  className="container">
      <h2>Create Category</h2>
      <form>
        <div>
          <label htmlFor="categoryName">Category Name:</label>
          <input
            type="text"
            id="categoryName"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="categoryImage">Category Image:</label>
          <input
            type="file"
            id="categoryImage"
            accept="image/*"
            onChange={(e) => setCategoryImage(e.target.files[0])}
          />
        </div>
        <button type="button" onClick={handleCreateCategory}>
          Create
        </button>
      </form>
      {creationMessage && <p>{creationMessage}</p>}
    </div>
  );
};

export default Category;
