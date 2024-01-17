import React from 'react';

export default function Ios() {
  const ios = { Phones: ["iPhone12"] };

  return (
    <div>
      <h1>Ios Phones</h1>
      <h2>Phones - Count: {ios.Phones.length}</h2>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
          </tr>
        </thead>
        <tbody>
          {ios.Phones.map((productName) => (
            <tr key={productName}>
              <td>{productName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
