import React, { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import MetaData from "../layout/MetaData";
import Loader from "../layout/Loader/Loader";

import "./Profile.css";
import { Navigate, Link } from "react-router-dom";
import { loadUser } from "../../actions/userAction";
import store from "../../store";

const Profile = () => {
  let { isAuthenticated, user } = useSelector((state) => state.user);

  useEffect(() => {
    try {
      store.dispatch(loadUser());
    } catch (error) {
      console.error("Error loading user:", error);
    }
  }, []);

  if (!user) return <Navigate to="/login" />;
  user = user.user;

  let loading = false;
  if (!user) {
    loading = true;
  }

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={`${user.name}'s Profile`} />
          <div className="profileContainer">
            <div className="profileImageContainer">
              <img src={require(`../ProductImages/${user && user.dp && user.dp.url}`)} alt={user.name} />
            </div>
            <div className="profileDetails">
              <div className="profileData">
                <h1>My Profile</h1>
                <div>
                  <h4>Full Name</h4>
                  <p>{user.name}</p>
                </div>
                <div>
                  <h4>Email</h4>
                  <p>{user.email}</p>
                </div>
              </div>
              <div className="profileButtonsContainer"> {/* New container for buttons */}
                <div className="profileButtons">
                  <button className="profileButton">
                    <Link to="/getProducts">My Products</Link>
                  </button>
                  <button className="profileButton">
                    <Link to="/loan">Loan Opportunities</Link>
                  </button>
                  <button className="profileButton">
                    <Link to="/Market">Market Price</Link>
                  </button>
                  <button className="profileButton">
                    <Link to="/logout">LOGOUT</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Profile;
