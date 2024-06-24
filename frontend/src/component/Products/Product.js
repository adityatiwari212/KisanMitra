import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../actions/productActions';


import ProductCard from './ProductCard';
import { useAlert } from 'react-alert'; // Move import statement here
import { Navigate , Link} from 'react-router-dom';
import Loader from '../layout/Loader/Loader';
import "./Product.css"


function Product() {
  const dispatch = useDispatch();
 
  let { isAuthenticated} = useSelector((state) => state.user);

  const { loading, error, product } = useSelector(
    (state) => state.products
  );

  
  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]); // Include alert as a dependency
  
  if (!isAuthenticated) { return <Navigate to="/login" />}

  if ( error ){
    return <p>
      {error}
    </p>
  }

  return (
    <>


  

      {loading ? (
        <Loader />
      ) : (
        <div>
      <h4 className='h4'>Your products</h4>
      <div className='products'>
        {product && product.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
      <Link to="/product/new" className="add-more-btn">Add More Products</Link>
    </div>
      )}
    </>
  );
}

export default Product;
