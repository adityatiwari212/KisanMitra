import React from 'react';
import { Link } from 'react-router-dom';
import "./abc.css"
function Products({ product }) {
  return (
    <Link className='product-card' to={`/product/${product._id}`}>
     
      <p className='product-name'>{product.name}</p>
      <span className='product-price'>₹{product.price}</span>
    </Link>
  );
}

export default Products;
