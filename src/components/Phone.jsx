import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Phone() {
  const productOptions = {
    Phones: ['iPhone12', 'Samsung Galaxy F12', 'Redmi 9A'],
  };

  const navigate = useNavigate();

  const handleProductClick = (productName) => {
    
    if (productName === 'iPhone12') {
      navigate('/ios');
    } else {
      navigate('/android');
    }
  };

  return (
    <div>
      <h1>Phone Category</h1>

      <h2>Phones - Count: {productOptions.Phones.length}</h2>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
          </tr>
        </thead>
        <tbody>
          {productOptions.Phones.map((productName) => (
            <tr key={productName} onClick={() => handleProductClick(productName)}>
              <td style={{ cursor: 'pointer' }}>{productName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
