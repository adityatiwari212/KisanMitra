import React from 'react';
import "./market.css"
const MarketPrice = () => {
  // Example data of crops and their market prices
  const cropPrices = [
    { crop: 'Rice', price: '₹40/kg' },
    { crop: 'Wheat', price: '₹35/kg' },
    { crop: 'Maize', price: '₹30/kg' },
    { crop: 'Barley', price: '₹38/kg' },
    { crop: 'Sugarcane', price: '₹2500/ton' },
    { crop: 'Cotton', price: '₹4500/quintal' },
    { crop: 'Groundnut', price: '₹50/kg' },
    { crop: 'Soybean', price: '₹40/kg' },
    { crop: 'Mustard', price: '₹45/kg' },
    { crop: 'Potato', price: '₹25/kg' },
    { crop: 'Tomato', price: '₹20/kg' },
    { crop: 'Onion', price: '₹30/kg' },
    { crop: 'Garlic', price: '₹60/kg' },
    { crop: 'Ginger', price: '₹80/kg' },
    { crop: 'Turmeric', price: '₹90/kg' },
    { crop: 'Carrot', price: '₹35/kg' },
    { crop: 'Brinjal', price: '₹18/kg' },
    { crop: 'Cauliflower', price: '₹25/kg' },
    { crop: 'Cabbage', price: '₹20/kg' },
    { crop: 'Spinach', price: '₹15/kg' },
    { crop: 'Broccoli', price: '₹40/kg' },
    { crop: 'Lettuce', price: '₹30/kg' },
    { crop: 'Capsicum', price: '₹40/kg' },
    { crop: 'Green Beans', price: '₹50/kg' },
    { crop: 'Peas', price: '₹45/kg' },
    { crop: 'Lentils', price: '₹60/kg' },
    { crop: 'Chickpeas', price: '₹70/kg' },
    { crop: 'Sorghum', price: '₹30/kg' },
    { crop: 'Millet', price: '₹35/kg' },
    { crop: 'Quinoa', price: '₹80/kg' },
    { crop: 'Bajra', price: '₹40/kg' },
    { crop: 'Jowar', price: '₹45/kg' },
    { crop: 'Flaxseed', price: '₹50/kg' },
    { crop: 'Sunflower', price: '₹55/kg' },
    { crop: 'Mustard Seeds', price: '₹65/kg' },
    { crop: 'Sesame', price: '₹70/kg' },
    { crop: 'Cashew', price: '₹800/kg' },
    { crop: 'Almond', price: '₹600/kg' },
    { crop: 'Peanuts', price: '₹70/kg' },
    { crop: 'Pistachios', price: '₹1000/kg' },
    { crop: 'Coconut', price: '₹50/kg' },
    { crop: 'Banana', price: '₹25/kg' },
    { crop: 'Mango', price: '₹40/kg' },
    { crop: 'Apple', price: '₹80/kg' },
    { crop: 'Orange', price: '₹30/kg' },
    { crop: 'Grapes', price: '₹60/kg' },
    { crop: 'Pineapple', price: '₹40/kg' },
    { crop: 'Watermelon', price: '₹10/kg' },
    { crop: 'Guava', price: '₹25/kg' },
    { crop: 'Pomegranate', price: '₹70/kg' },
    { crop: 'Lemon', price: '₹15/kg' },
    // Add more crops and prices here...
    { crop: 'Chilli', price: '₹70/kg' },
    { crop: 'Cucumber', price: '₹25/kg' },
    { crop: 'Pumpkin', price: '₹20/kg' },
    { crop: 'Okra', price: '₹35/kg' },
    { crop: 'Radish', price: '₹15/kg' },
    { crop: 'Turnip', price: '₹20/kg' },
    { crop: 'Beetroot', price: '₹30/kg' },
    { crop: 'Coriander', price: '₹40/kg' },
    { crop: 'Cumin', price: '₹90/kg' },
    { crop: 'Fennel', price: '₹50/kg' },
    { crop: 'Bay Leaves', price: '₹60/kg' },
    { crop: 'Cloves', price: '₹700/kg' },
    { crop: 'Cinnamon', price: '₹500/kg' },
    { crop: 'Cardamom', price: '₹800/kg' },
    { crop: 'Black Pepper', price: '₹450/kg' },
    { crop: 'Turmeric Powder', price: '₹100/kg' },
    { crop: 'Chilli Powder', price: '₹80/kg' },
    { crop: 'Coriander Powder', price: '₹60/kg' },
    { crop: 'Cumin Powder', price: '₹70/kg' },
    { crop: 'Fenugreek', price: '₹30/kg' },
    // Add more crops and prices here...
  ];

  return (
    <div className="crop-prices-page">
      <h1>Indian Crop Prices</h1>
      <div className="crop-prices-list">
        {cropPrices.map((cropPrice, index) => (
          <div className="crop-price-item" key={index}>
            <h2>{cropPrice.crop}</h2>
            <p>Market Price: {cropPrice.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketPrice;
