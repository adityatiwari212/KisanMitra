import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../actions/userAction';
import './Register.css'; // Import custom CSS file for styling
import { Navigate } from 'react-router-dom';
import { productNew, uploadImage } from '../../actions/productActions';
const Register = ({ history, location }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [avatar, setAvatar] = useState(null); // Assuming avatar file is stored here
  const [file , setFile]= useState ();
  const registerSubmit = (e) => {
    e.preventDefault();


    const formData = new FormData();
    formData.append('file' , file)
    dispatch(uploadImage(formData))

    const dp= {
      public_id : "1234" ,
      url : `${file.name}`
    }

    const userData = {
      name,
      email,
      password,
      dp
    };

    dispatch(register(userData));

    return <Navigate to="/profile" />
  };

  const handleFileChange = (e) => {
    setAvatar(e.target.files[0]);
  };

  return (
    <div className="register-container">
      <h2 className="register-heading">Register</h2>
      <form onSubmit={registerSubmit} className="register-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        
        <input type='file' onChange={(e) => setFile(e.target.files[0])} />
        {/* <div className="form-group">
          <label htmlFor="avatar">Profile Picture:</label>
          <input type="file" id="avatar" onChange={handleFileChange} accept="image/*" />
        </div> */}
        <button type="submit" className="register-button">Register</button>
      </form>
    </div>
  );
};

export default Register;
