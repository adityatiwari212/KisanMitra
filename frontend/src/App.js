import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import store from "./store.js";
import Header from "./component/layout/Header.js";
import Footer from "./component/layout/footer.js";
import Home from "./component/Home/Home.js";
import Login from "./component/User/LoginSignUp.js";
import Register from "./component/User/Register.js";
import Product from "./component/Products/Product.js";
import ProductDetails from "./component/Products/ProductDetails.js";
import { loadUser } from "./actions/userAction.js";
import { useSelector } from "react-redux";
import Profile from "./component/User/profile.js";
import NewProduct from "./component/Products/NewProduct.js";
import './App.css';
import Video from './component/layout/video.js';
import MiddleContent from './component/layout/middlecontent.js';
import Service from './component/layout/service.js'; 
import Cards from './component/layout/cards.js';
import Cards2 from './component/layout/cards2.js';
import Weather from './Weather/Weather.js';
import Logout from "./component/User/logout.js"
import Community from "./component/Community/Community.js";

import ChatComponent from './component/layout/chat.js'
import MarketPrice from "./component/MarketPrice.js";
import Loan from "./component/Loan.js";
function App() {
  // let { isAuthenticated, user } = useSelector((state) => state.user);

  
  // console.log(user);

  // React.useEffect(() => {
  //   try {
  //     console.log("hey");
  //     store.dispatch(loadUser());
  //   } catch (error) {
  //     console.error("Error loading user:", error);
  //   }
  // }, []);

  // user = user.user
  // console.log("user Data in app.js"  )
  // console.log(user) 
  
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Video />
            <MiddleContent />
            <Service />
            <Cards2 />
           
            {/* <Cards /> */}
          </>
        } />
        <Route path="/login" element={
        <>
        <Login />  
        </>
        } />
        <Route path="/register" element={
        <>
        <Register />
        <ChatComponent />
        </>
        
        
        } />
        <Route path="/getProducts" element={<Product />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        {/* <Route path="/profile" element={<Profile user={user}/>} /> */}

        <Route path="/profile" element={<Profile />} />
        <Route path="/product/new" element={<NewProduct />} />
        <Route path="/Weather_Forecast" element={<Weather />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/community" element={<Community />} />
        <Route path="/Market" element={<MarketPrice />} />
        <Route path="/loan" element={<Loan />} />
        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
