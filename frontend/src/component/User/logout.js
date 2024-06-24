import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../actions/userAction';
import { Navigate } from 'react-router-dom';

const Logout = () => {
  const dispatch = useDispatch();

  // Dispatch the logout action when the component mounts
  useEffect(() => {
    dispatch(logout());
  }, [dispatch]);

  return (
    <Navigate to="/login" />
  );
};

export default Logout;
