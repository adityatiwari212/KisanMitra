import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './ProductDetails.css';
import { getProductDetails } from '../../actions/productActions';
import { useParams } from 'react-router-dom';
import Loader from '../layout/Loader/Loader';

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { product, loading, error } = useSelector(state => state.productDetails);

  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [dispatch, id]);

  return (
    <>
      {loading ? (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      ) : (
        <div className="product-card">
          <img className="product-image" src={product && product.images && require (`../ProductImages/${product.images.url}` ) } alt="Product" />
          <div className="product-details">
            <p><strong>Name</strong>: {product && product.name}</p>
            <p><strong>Description</strong>: {product && product.description}</p>
            <p><strong>Price</strong>: ₹{product && product.price}</p>
            <p><strong>Quantity</strong>: {product && product.quantity}</p>
            <p><strong>Uploaded At</strong>: {product && String(product.createdAt).substr(0, 10)}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
