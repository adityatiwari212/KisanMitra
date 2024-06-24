import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../actions/userAction';
import Loader from '../layout/Loader/Loader';
import "./style.css";
import { Navigate , Link} from 'react-router-dom';

function LoginSignUp() {
  const dispatch = useDispatch();
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [userData, setUserData] = useState(null); // State variable to store user data

  const loginSubmit = (e) => {
    e.preventDefault();
    dispatch(login(loginEmail, loginPassword));
  };

  const { user, isAuthenticated, loading, error } = useSelector(state => state.user);

  // Update userData when user data is available
  React.useEffect(() => {
    if (isAuthenticated && user) {
      setUserData(user);
    }
  }, [isAuthenticated, user]);

  // if(!user && !isAuthenticated) {return <Navigate to="/login" />;}// redirect to the login page
  if(user && isAuthenticated ) { return <Navigate to="/profile" />}
  return (
    <>
      {loading ? (<Loader />) : (
        <form onSubmit={loginSubmit}>
          <div className="login-signup-container">
            <input
              type="email"
              placeholder="Email"
              className="input-field"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="input-field"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
            />
            <button type="submit" className="submit-button">Submit</button>
          </div>

          <p> {user && user.name}</p>
          <p> {!user && !isAuthenticated &&  "Incorrect Login Id or Password"}</p>

          <Link to="/register" >
      <button className='registerButton'>Not yet on KisanMitra? Register Now</button>
    </Link>

        </form>


          
      )}
    </>
  );
}

export default LoginSignUp;
