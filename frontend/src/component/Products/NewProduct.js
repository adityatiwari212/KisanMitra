import React, { useState , useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { productNew, uploadImage, getCropDataFromApi } from '../../actions/productActions';
import './newProduct.css'; // Import CSS file for styling
import { Navigate, Link } from 'react-router-dom';
import axios from 'axios';

const NewProduct = () => {
  const dispatch = useDispatch();
  const [file, setFile] = useState();
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState('');
  const [state, setState] = useState('');
  const [commodity, setCommodity] = useState('');
  const [goods , setGoods] = useState('')
  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);

  const handleCommodityChange = (selectedCommodity) => {
    
    // setCommodity(selectedCommodity);

    // console.log(selectedCommodity)
    // Dispatch action to get crop data when commodity is chosen
    // dispatch(getCropDataFromApi({ state, commodity: selectedCommodity }));
    // const request = `https://api.data.gov.in/resource/73140461-fda6-4e1b-9b6f-8026067a0077?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json&filters%5Bstate%5D=Maharashtra
      // `
      let formattedState = state;
      if (state.split(' ').length > 1) {
        formattedState = state.replace(' ', '%20');
      }
      console.log(commodity) 

      console.log(formattedState)
      const request = `https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json&filters%5Bstate.keyword%5D=${formattedState}&filters%5Bcommodity%5D=${selectedCommodity}`
    console.log(request)


   axios.get(request)
      .then((res) => {
        console.log(res.data.records[0]);
        setMinPrice(res.data.records[0].min_price);
        setMaxPrice(res.data.records[0].max_price);
      })
      .catch((error) => {
        console.error('Error fetching crop data:', error);
      });

      // console.log(commodity)

  };

  useEffect(() => {
    if (commodity) {
      handleCommodityChange(commodity);
    }
  }, [commodity, state]); 

  const productSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('file', file)

    dispatch(uploadImage(formData))

    const images = {
      public_id: "1234",
      url: `${file.name}`
    }

    const productData = { name : commodity , price, description, quantity, images };

    dispatch(productNew(productData));


    setPrice('');
    setDescription('');
    setQuantity('');
    setState('');
    setCommodity('');

  };

  return (
    <div className="new-product-container">
      <h2 className="h2">Add New Product</h2>
      <form onSubmit={productSubmit} className="product-form">


      <div className="form-group">
  <label htmlFor="state">State:</label>
  <select id="state" value={state} onChange={(e) => setState(e.target.value)}>
    <option value="">Select State</option>
    <option value="Andhra Pradesh">Andhra Pradesh</option>
    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
    <option value="Assam">Assam</option>
    <option value="Bihar">Bihar</option>
    <option value="Chhattisgarh">Chhattisgarh</option>
    <option value="Goa">Goa</option>
    <option value="Gujarat">Gujarat</option>
    <option value="Haryana">Haryana</option>
    <option value="Himachal Pradesh">Himachal Pradesh</option>
    <option value="Jharkhand">Jharkhand</option>
    <option value="Karnataka">Karnataka</option>
    <option value="Kerala">Kerala</option>
    <option value="Madhya Pradesh">Madhya Pradesh</option>
    <option value="Maharashtra">Maharashtra</option>
    <option value="Manipur">Manipur</option>
    <option value="Meghalaya">Meghalaya</option>
    <option value="Mizoram">Mizoram</option>
    <option value="Nagaland">Nagaland</option>
    <option value="Odisha">Odisha</option>
    <option value="Punjab">Punjab</option>
    <option value="Rajasthan">Rajasthan</option>
    <option value="Sikkim">Sikkim</option>
    <option value="Tamil Nadu">Tamil Nadu</option>
    <option value="Telangana">Telangana</option>
    <option value="Tripura">Tripura</option>
    <option value="Uttar Pradesh">Uttar Pradesh</option>
    <option value="Uttarakhand">Uttarakhand</option>
    <option value="West Bengal">West Bengal</option>
  </select>
</div>


       

        {/* <div className="form-group">
  <label htmlFor="commodity">Commodity:</label>
  <select 
  id="commodity" 
  value={commodity} 
  onChange={(e) => { 
    const selectedCommodity = e.target.value;
    
    console.log(selectedCommodity);
    setCommodity(selectedCommodity); 
  if(commodity != setCommodity){
    setCommodity(selectedCommodity); 
  }
    console.log(commodity)
    handleCommodityChange(selectedCommodity); // Pass the selected value directly
  }}
>
  <option value="">Select Commodity</option>
  <option value="Wheat">Wheat</option>
  <option value="Rice">Rice</option>
</select>
</div> */}

<div className="form-group">
          <label htmlFor="commodity">Commodity:</label>
          <select 
            id="commodity" 
            value={commodity} 
            onChange={(e) => setCommodity(e.target.value)}
          >
            <option value="">Select Commodity</option>
            <option value="Wheat">Wheat</option>
            <option value="Rice">Rice</option>
            <option value="Potato">Potato</option>
            <option value="Radish">Raddish</option>
            <option value="Onion">Onion</option>
    <option value="Cucumber(Kheera)">Cucumber(Kheera)</option>
    <option value="Maize">Maize</option>
    <option value="Beans">Beans</option>
    <option value="Beetroot">Beetroot</option>
    <option value="Drumstick">Drumstick</option>
    <option value="Methi(Leaves)">Methi(Leaves)</option>
    <option value="Mint(Pudina)">Mint(Pudina)</option>
    <option value="Brinjal">Brinjal</option>
    <option value="Tomato">Tomato</option>
    <option value="Banana">Banana</option>
    <option value="Paddy(Dhan)">Paddy(Dhan)</option>
    <option value="Coconut">Coconut</option>
    <option value="Carrot">Carrot</option>
          </select>
        </div>


        <div className="form-group">
          <label htmlFor="price">Your price:</label>
          <input type="number" id="quantity" value={price} onChange={(e) => setPrice(e.target.value)} required />
        </div>
        {/* Display minPrice and maxPrice if available */}
        {minPrice && maxPrice && (
          <div>
            <p>Min Price: {minPrice} /quintal</p>
            <p>Max Price: {maxPrice} /quintal</p>
          </div>
        )}


        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="quantity">Quantity: (in quintal/s)</label>
          <input type="number" id="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
        </div>

        <input type='file' onChange={(e) => setFile(e.target.files[0])} />

        <button type="submit" className="submit-btn">Submit


        </button>

        <Link to="/getProducts" className="add-more-btn">Back to All Products</Link>

      </form>
    </div>
  );
};

export default NewProduct;
