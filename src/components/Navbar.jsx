import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <div>
      <header>
        <nav>
            <ul>
                <li className='list'>

                   <Link to="/category" className='list'>
                    Category
                    </Link>
                 
                </li>
                <li className='list'>
                    <Link to="/products" className='list'>
                    Product
                    </Link>
                    
                </li>

                
                    <li className='list'>
                    <Link to="/productlist" className='list'>
                    Product Lists
                    </Link>
                    
                </li>
                
                <li className='list'>
                    <Link to="/listing" className='list'>
                    Product Form
                    </Link>
                    
                </li>
                
                
            </ul>
        </nav>
      </header>
    </div>
  )
}
