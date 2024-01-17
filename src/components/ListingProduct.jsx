import React, { useState, useEffect } from 'react';
import './Listingproduct.css';
import { useNavigate } from 'react-router-dom';
export default function YourComponent() {
  const [subcategory, setSubcategory] = useState('Phones');
  const [productName, setProductName] = useState('iphone12');
  const [productOptions, setProductOptions] = useState({
    Phones: ['iPhone12', 'Samsung Galaxy F12', 'Redmi 9A'],
    Tablets: ['iPad Air', 'Samsung Galaxy Tab', 'Asus ZenPad'],
    Laptops: ['Dell Inspiron', 'MacBook Air'],
  });
  const [totalProductName, setTotalProducts] = useState(0);
  const [listings, setListings] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate=useNavigate();
  const handleAddListing = async () => {
    try {
      const response = await fetch('http://localhost:5000/listing', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          subcategory,
          productName,
        }),
      });
   
      if (response.ok) {
        const data = await response.json();
        console.log('New listing added:', data);
        
        fetchListings();
      } else {
        console.error('Failed to add listing:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error adding listing:', error.message);
    }
  };
 const nav=()=>{
  navigate(`/listings/${subcategory}`)
 }
  const fetchListings = async () => {
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:5000/listings');
      if (response.ok) {
        const data = await response.json();
        setListings(data);
        const total = data.reduce((acc, listing) => {
          if (listing.subcategory !== 'Electronics' && listing.productName !== 'Total') {
            acc += listing.count || 0;
          }
          return acc;
        }, 0);

        setTotalProducts(total);
      } else {
        console.error('Failed to fetch listings:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error fetching listings:', error.message);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    
    fetchListings();
  }, []);

  return (
    <div>
      <h2>Add New Listing</h2>

      <label>Subcategory:</label>
      <select value={subcategory} onChange={(e) => setSubcategory(e.target.value)}>
        <option value="Phones">Phones</option>
        <option value="Tablets">Tablets</option>
        <option value="Laptops">Laptops</option>
      </select>

      <label>Product:</label>
      <select value={productName} onChange={(e) => setProductName(e.target.value)}>
        {productOptions[subcategory].map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <button onClick={handleAddListing}>Add Listing</button>

      <h2>Listings</h2>
      <p>Total Number of Products: {totalProductName}</p>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Subcategory</th>
              <th>Product Name</th>
            </tr>
          </thead>
          <tbody>
            {listings.map((listing) => (
              <tr key={listing._id}>
                     <td>
                      {listing.subcategory === "Phones" ? (
                        <button onClick={nav}>Click Me</button>
                      ) : (
                        listing.subcategory
                      )}
                    </td>

                <td>{listing.productName}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
