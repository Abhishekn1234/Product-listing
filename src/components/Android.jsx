import React from 'react'

export default function Android() {
    const androidphones={Phones:["Redmi 9A","Samsung galaxy 9A"]}
    
  return (
    <div>
      <h1>Android phones</h1>
    

      <h2>Phones - Count: {androidphones.Phones.length}</h2>
     
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
          </tr>
        </thead>
        <tbody>
          {androidphones.Phones.map((productName) => (
            <tr key={productName}>
              <td>{productName}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  )
}
